<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Group;
use App\Models\InvCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class InvCodeController extends Controller
{
    public function getInvCodes(Request $request)
    {
        $InvCodes = InvCode::query()->paginate($request["size"]);
        return ResponseController::success($InvCodes);
    }

    public function addInvCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name"      => "required|string",
            "can_count" => "required|numeric",
            "group_id"  => "required|numeric"
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        $invCode = InvCode::query()->firstWhere("name", $request["name"]);
        if ($invCode) return ResponseController::invCodeExists();

        $group = Group::query()->find($request["group_id"]);
        if (!$group) return ResponseController::groupNotExists();

        InvCode::query()->create([
            "name"      => $request["name"],
            "group_id"  => $request["group_id"],
            "can_count" => $request["can_count"]
        ]);

        return ResponseController::success();
    }

    public function generateInvCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "can_count" => "required|numeric",
            "count"     => "required|numeric",
            "group_id"  => "required|numeric"
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        $group = Group::query()->find($request["group_id"]);
        if (!$group) return ResponseController::groupNotExists();

        for ($i = 0; $i < $request["count"]; $i++) {
            $name    = Str::random();
            $invCode = InvCode::query()->firstWhere("name", $name);
            if ($invCode) {
                $i--;
                continue;
            }

            InvCode::query()->create([
                "name"      => $name,
                "group_id"  => $request["group_id"],
                "can_count" => $request["can_count"]
            ]);
        }

        return ResponseController::success();
    }

    public function updateInvCode(Request $request, $inv_code_id)
    {
        $validator = Validator::make($request->all(), [
            "name"      => "required|string",
            "group_id"  => "required|numeric",
            "can_count" => "required|numeric"
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        $invCode = InvCode::query()->find($inv_code_id);
        if (!$invCode) return ResponseController::invCodeNotExists();

        $InvCode = InvCode::query()->firstWhere("name", $request["name"]);
        if ($InvCode && $invCode["id"] !== $InvCode["id"]) return ResponseController::invCodeExists();

        $group = Group::query()->find($request["group_id"]);
        if (!$group) return ResponseController::groupNotExists();

        $invCode->update([
            "name"      => $request["name"],
            "group_id"  => $request["group_id"],
            "can_count" => $request["can_count"]
        ]);

        return ResponseController::success();
    }

    public function removeInvCodes(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "inv_code_ids"   => "required|array",
            "inv_code_ids.*" => "required|numeric"
        ]);

        if ($validator->fails()) return ResponseController::paramsError();

        if (in_array(1, $request["inv_code_ids"])) return ResponseController::invCodeCanNotBeRemoved("自带邀请码禁止删除");

        InvCode::query()->whereIn("id", $request["inv_code_ids"])->delete();

        return ResponseController::success();
    }
}
