@extends('layouts.app')

@section('content')
    <router-view :cars="{{$cars}}"></router-view>
@endsection
