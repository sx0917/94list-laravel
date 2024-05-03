<?php

namespace App\Http\Controllers;

use App\Models\InvCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class InvCodeController extends Controller
{
    public function getInvCode(Request $request, $inv_code = null)
    {
        if ($inv_code !== null) {
            $invCode = InvCode::query()->find($inv_code);
            if (!$invCode) return ResponseController::invCodeNotExists();
            return ResponseController::success($invCode);
        }

        $InvCodes = InvCode::query()->get();
        return ResponseController::success($InvCodes);
    }

    public function addInvCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'string',
            'can_count' => 'required|numeric',
            'count'     => 'numeric'
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        if ($request['count']) {
            $names = [];
            for ($i = 0; $i < $request['count']; $i++) {
                $name    = Str::random();
                $invCode = InvCode::query()->firstWhere('name', $name);
                if ($invCode) {
                    $i--;
                    continue;
                }

                InvCode::query()->create([
                    'name'      => $name,
                    'use_count' => 0,
                    'can_count' => $request['can_count']
                ]);

                $names[] = $name;
            }

            return ResponseController::success($names);
        } else if ($request['name']) {
            $invCode = InvCode::query()->firstWhere('name', $request['name']);
            if ($invCode) return ResponseController::invCodeExists();

            InvCode::query()->create([
                'name'      => $request['name'],
                'use_count' => 0,
                'can_count' => $request['can_count']
            ]);

            return ResponseController::success();
        } else {
            return ResponseController::paramsError();
        }
    }

    public function updateInvCode(Request $request, $inv_code)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'string',
            'use_count' => 'numeric',
            'can_count' => 'numeric'
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        $invCode = InvCode::query()->firstWhere('name', $inv_code);
        if (!$invCode) return ResponseController::invCodeNotExists();

        $update = [];

        if ($request['name']) {
            if (InvCode::query()->firstWhere('name', $request['name'])) return ResponseController::invCodeExists();
            $update['name'] = $request['name'];
        }

        if ($request['use_count']) $update['use_count'] = $request['use_count'];
        if ($request['can_count']) $update['can_count'] = $request['can_count'];

        if (count($update) === 0) return ResponseController::paramsError();

        $invCode->update($update);

        return ResponseController::success();
    }

    public function removeInvCode(Request $request, $inv_code)
    {
        $invCode = InvCode::query()->firstWhere('name', $inv_code);
        if (!$invCode) return ResponseController::invCodeNotExists();

        $invCode->delete();

        return ResponseController::success();
    }
}
