<?php 
namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Products;
// other dependencies
class ProductsFactory extends Factory
{
   protected $model = Products::class;

   /**
   * Define the model's default state.
   *
   * @return array
   */
   public function definition()
   {
      $pack_type = ['non_shareable', 'shareable', 'unlimited'];
      $tag_name = [null,   'Popular',  'Limited', 'New'];
      return [
         'display_order' => 1,
         'pack_id' => $this->faker->uuid(),// uuid 20c59fd5-d327-4540-bee4-6a2f0ca4d3ee
         'pack_name' => $this->faker->words(1, true), // 20 Class Pack
         'pack_description' => $this->faker->words(3, true),//20 Class Pack desc
         'pack_type' => $pack_type[array_rand($pack_type)], //$this->faker->words(5, true), // non_shareable non_shareable 
         'total_credit' => $this->faker->numberBetween(1, 50), // 10
         'tag_name' => $tag_name[array_rand($tag_name)],
         'validity_month' => 3, //0,3,12,24
         'pack_price' => $this->faker->numberBetween(100, 500), // 23.54, //235.4
         'newbie_first_attend' => $this->faker->boolean(), //false
         'newbie_addition_credit' => $this->faker->boolean(), // 1
         'newbie_note' => $this->faker->words(5, true),//Newbie get an additional Free class
         'pack_alias' => $this->faker->words(5, true), // pack-20
         'estimate_price' => $this->faker->numberBetween(10, 100), // 23.54
      ];
   }
}