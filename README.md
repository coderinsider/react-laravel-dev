# react-laravel-dev
Happy Hacking
## Installation
Install the dependencies and devDependencies and start the server.
Open your terminal. and then start run following commands.

```sh
git clone https://github.com/coderinsider/react-laravel-dev.git
```

Let create MySQL database name is "codigo_server"

and then. Go to backend directory.
```sh
cd react-laravel-dev/server/
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve --port=8000
```
