<?php

namespace App\Controllers;

class HomeController extends BaseController
{
    public function index()
    {
        return view('start');
    }

    public function testApi($data)
    {
        $response = [];
        $response['sentData'] = $data;
        return $this->response->setJSON($response);
    }
}
