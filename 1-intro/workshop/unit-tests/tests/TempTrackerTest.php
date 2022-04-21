<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_insert() {
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(50);
        $this->assertEquals(50, $temp_tracker->get_min());
        $this->assertEquals(50, $temp_tracker->get_max());
        $this->assertEquals(50, $temp_tracker->get_mean());
        $this->assertEquals([50], $temp_tracker->get_temps());
    }

    public function test_string(){
        $this->expectException(TypeError::class);
        $temp_tracker = new TempTracker();
        $temp_tracker->insert('a');
       
    }
    public function test_value(){
        $this->expectException(ValueError::class);
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(-1);
    }

    public function test_min() {
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(50);
        $temp_tracker->insert(10);
        $temp_tracker->insert(20);
        $this->assertEquals(10, $temp_tracker->get_min());
    }

    public function test_max() {
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(50);
        $temp_tracker->insert(10);
        $temp_tracker->insert(20);
        $this->assertEquals(50, $temp_tracker->get_max());
    }

    public function test_mean() {
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(50);
        $temp_tracker->insert(50);
        $this->assertEquals(50, $temp_tracker->get_mean());
    }

    

    public function test_temps() {
        $temp_tracker = new TempTracker();
        $temp_tracker->insert(50);
        $temp_tracker->insert(10);
        $temp_tracker->insert(20);
        $this->assertEquals([50, 10, 20], $temp_tracker->get_temps());
    }

    public function test_no_insert(){
        $this->expectException(ValueError::class);
        $temp_tracker = new TempTracker();
        $temp_tracker->get_mean();
        
    }

}