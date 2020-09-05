<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ClientRequest;

use App\Client;
use App\Navigation;

class ApiController extends Controller
{
    public function navigation()
    {
    	$Navs = Navigation::select('id','name','path')->get();
    	//dd($Navs);
    	return response()->json($Navs);
    }

    public function client($filter)
    {
        if ($filter == 'all') {
            $Dato = Client::select('id','name','nickname','email','phone','age','state')->orderby('id','DESC')->paginate(50);
        }else{
            $Dato = Client::select('id','name','nickname','email','phone','age','state')->where('state','=',$filter)->orderby('id','DESC')->paginate(50);
        }
    	
    	//dd($Dato);
    	return response()->json($Dato);
    }

    public function store(ClientRequest $request)
    {
        $client = new Client($request->all());
        $client->save();

        return response()->json($client,201);
    }

    public function update(Request $request)
    {
        $Client = Client::find($request->state);
        
        if ($Client->state == 'on') {
            $Client->state = 'off';
        }else{
            $Client->state = 'on';
        }

        $Client->save();

        return response()->json($Client,201);
    }
    
}
