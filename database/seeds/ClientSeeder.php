<?php

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->insert([
            'name' => 'Juan Perez',
            'nickname' => 'example',
            'email' => 'example@email.com',
            'phone' => '5554442255',
            'age' => '22',
        ]);
    }
}
