<?php 
namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\PromoCode;
// other dependencies
class PromoCodeFactory extends Factory
{
   protected $model = PromoCode::class;

	/**
	* Define the model's default state.
	*
	* @return array
	*/
	public function definition()
	{
		$chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$res = "";
		for ($i = 0; $i < 10; $i++) {
			$res .= $chars[mt_rand(0, strlen($chars)-1)];
		};
		return [
			'promo_codes' => $res,
			'is_available' => 1
		];
	}
}