<?php
/*
Plugin Name: Click Word Dictionary
Description: A Simple plugin to add word selection dictionary functionality 
Plugin URI: www.wp-quick-qr.com
Author: Al Amin
Author URI: www.example.com
Version: 1.0.0
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Requires at least: 6.0
Requires PHP: 8.0
*/

defined('ABSPATH') || exit;

add_action('wp_enqueue_scripts', 'cwd_enqueue_scripts');
function cwd_enqueue_scripts(){
    if(is_single()){
        wp_enqueue_script('cwd_script', plugin_dir_url(__FILE__).'assets/js/main.js',[],'1.0.0', true);
        wp_enqueue_style('cwd_style', plugin_dir_url(__FILE__).'assets/css/style.css',[],'1.0.0');
    }
}