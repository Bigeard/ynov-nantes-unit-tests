<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
   public function test_with_null()
   {
      $this->assertEquals([], flatten([]));
      $this->assertEquals([], flatten([[[[]]]]));
   }

 
    public function test_egal()
 {   $a =rand(0,110);
     $b =rand(0,110);
     $c =rand(0,110);
        $this->assertEquals(array( $a,$b,$c ) , flatten([$a,$b,$c]));
    }

    public function test_nested_once(){
        $this->assertEquals(array(1,2,3,4,5,6,7,8,9,10), flatten([[1,2,3], [4,5,6], [7,8,9], [10]]));
    }

    



    

    
}