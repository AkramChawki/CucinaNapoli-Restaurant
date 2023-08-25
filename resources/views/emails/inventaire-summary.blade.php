<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Your Order!</h1>
    <p>Name: {{ $order->name }}</p>

    <ul>
        @foreach ($order->products() as $p)
            <li>Product: {{ $p->designation }}. Quantité: {{ $p->qty }}</li>
        @endforeach
    </ul>
</body>

</html>
