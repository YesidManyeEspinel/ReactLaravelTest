<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(NavigationSeeder::class);
        $this->call(ClientSeederaaa::class);
        $this->call(ClientSeederaa::class);
        $this->call(ClientSeedera::class);
        $this->call(ClientSeeder::class);
        $this->call(ClientSeederaaaa::class);
    }
}
