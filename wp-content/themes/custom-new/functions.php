<?php

// add the CSS and JSFile

function scripts_setup()
{
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Roboto+Mono&display=swap');
    wp_enqueue_style('font-awesome', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css');
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_script('main', get_theme_file_uri('/js/main.js'), NUll, '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'scripts_setup');

// add theme support

function init()
{
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support(
        'html5',
        array('comment-list', 'comment-form', 'search-form')
    );
}

add_action('after_setup_theme', 'init');

// Project Post Type - Project
function custom_post_type_project()
{
    register_post_type(
        'project',
        array(
            'rewrite' => array('slug' => 'projects'),
            'labels' => array(
                'name' => 'Projects',
                'singular_name' => 'Project',
                'add_new_item' => 'Add New Project',
                'edit_item' => 'Edit Project'
            ),
            'menu-icon' => 'dashicons-clipboard',
            'public' => true,
            'has_archive' => true,
            'supports' => array(
                'title', 'thumbnail', 'editor', 'excerpt',
            ),
            'taxonomies'  => array('category')
        )
    );
}

add_action('init', 'custom_post_type_project');


// Register Custom Taxonomy
function custom_taxonomy_for_project() {
    $labels = array(
        'name'                       => _x( 'Custom Categories', 'Taxonomy General Name', 'text_domain' ),
        'singular_name'              => _x( 'Custom Category', 'Taxonomy Singular Name', 'text_domain' ),
        'menu_name'                  => __( 'Custom Categories', 'text_domain' ),
        'all_items'                  => __( 'All Custom Categories', 'text_domain' ),
        'parent_item'                => __( 'Parent Custom Category', 'text_domain' ),
        'parent_item_colon'          => __( 'Parent Custom Category:', 'text_domain' ),
        'new_item_name'              => __( 'New Custom Category Name', 'text_domain' ),
        'add_new_item'               => __( 'Add New Custom Category', 'text_domain' ),
        'edit_item'                  => __( 'Edit Custom Category', 'text_domain' ),
        'update_item'                => __( 'Update Custom Category', 'text_domain' ),
        'view_item'                  => __( 'View Custom Category', 'text_domain' ),
        'separate_items_with_commas' => __( 'Separate categories with commas', 'text_domain' ),
        'add_or_remove_items'        => __( 'Add or remove categories', 'text_domain' ),
        'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
        'popular_items'              => __( 'Popular Custom Categories', 'text_domain' ),
        'search_items'               => __( 'Search Custom Categories', 'text_domain' ),
        'not_found'                  => __( 'Not Found', 'text_domain' ),
        'no_terms'                   => __( 'No categories', 'text_domain' ),
        'items_list'                 => __( 'Custom Categories list', 'text_domain' ),
        'items_list_navigation'      => __( 'Custom Categories list navigation', 'text_domain' ),
    );
    $args = array(
        'labels'                     => $labels,
        'hierarchical'               => true, // If true, it behaves like categories. If false, it behaves like tags.
        'public'                     => true,
        'show_ui'                    => true,
        'show_admin_column'          => true,
        'show_in_nav_menus'          => true,
        'show_tagcloud'              => true,
        'rewrite'                    => array( 'slug' => 'custom_category' ), // Change 'new_slug' to your desired slug
    );
    register_taxonomy( 'custom_category', array( 'project' ), $args );
}
add_action( 'init', 'custom_taxonomy_for_project', 0 );

function widgets()
{
    register_sidebar(
        array(
            'name' => 'Main Sidebar',
            'id' => 'main_sidebar',
            'befor_title' => '<h3>',
            'after_title' => '</h3>'
        )
    );
}

add_action('widgets_init', 'widgets');


