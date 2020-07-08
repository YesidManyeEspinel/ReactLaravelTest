<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'min:5|max:250|required',
            'nickname'=>'min:1|max:250|required|unique:clients',
            'email'=>'min:5|max:250|required|unique:clients',
            'phone'=>'min:5|required',
            'age'=>'max:3|required'
        ];
    }
}
