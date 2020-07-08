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
    public function client()
    {
    	$Dato = Client::select('id','name','nickname','email','phone','age')->get();
    	//dd($Dato);
    	return response()->json($Dato);
    }
    public function store(ClientRequest $request)
    {
        $client = new Client($request->all());
        $client->save();

        return response()->json($client,201);
    }
    
}
