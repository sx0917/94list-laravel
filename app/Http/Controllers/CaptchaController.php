<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CaptchaController extends Controller
{
    public static function check(Request $request)
    {
        return match (config('94list.captcha.use')) {
            'VAPTCHA' => self::VAPTCHA($request),
            default   => false,
        };
    }

    public static function VAPTCHA(Request $request)
    {
        $id        = config('94list.captcha.VAPTCHA.vid');
        $secretkey = config('94list.captcha.VAPTCHA.key');
        $scene     = config('94list.captcha.VAPTCHA.scene');
        $ip        = $request->ip();

        $validator = Validator::make($request->all(), [
            'server' => ['required', 'regex:/https:\/\/.*\.vaptcha\.(com|net)/i'],
            'token'  => 'required|string'
        ]);

        if ($validator->fails()) return false;

        $http = new Client();

        try {
            $data     = $http->post($request['server'], [
                'json' => [
                    'id'        => $id,
                    'secretkey' => $secretkey,
                    'scene'     => $scene,
                    'token'     => $request['token'],
                    'ip'        => $ip
                ]
            ]);
            $response = json_decode($data->getBody()->getContents(), true);
        } catch (RequestException $e) {
            $response = $e->hasResponse() ? json_decode($e->getResponse()->getBody()->getContents()) : null;
        }

        return $response && $response['success'] === 1;
    }
}
