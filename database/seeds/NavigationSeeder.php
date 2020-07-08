<?php

use Illuminate\Database\Seeder;

class NavigationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('navigations')
        ->insert([
        	['name' => 'home','path' => ''],
        	['name' => 'List Client','path' => 'listclient'],
        	['name' => 'Add Client','path' => 'addclient'],
        ]);

    }
}
