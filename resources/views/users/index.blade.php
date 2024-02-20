@extends('layouts.app')
 
@section('content')
  <example :users="{{$users->toJson()}}"/>
@endsection