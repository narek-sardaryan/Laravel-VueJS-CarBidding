<?php

namespace App\Http\Controllers;

use App\Car;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    public function showcar($id)
    {
        $car = Car::find($id);
        return view('showcar', compact('car'));
    }

    public function fetchcar($id)
    {
        $car = Car::find($id);
        return $car;
    }
}
