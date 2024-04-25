<!-- Single Project -->
<?php get_header();
while (have_posts()) {
    the_post();
    ?>
    <main>
        <div class="container page-container">
            <div id="title-container">
            
                <h2 class="page-heading"><?php the_title(); ?></h2>
                <div class="blog-category">
                <?php
                    // Get the custom category list
                    $custom_categories = get_the_terms( get_the_ID(), 'custom_category' );

                    // Check if custom categories exist
                    if ($custom_categories && ! is_wp_error($custom_categories)) {
                        // Loop through each custom category and display its name
                        $category_names = array();
                        foreach ($custom_categories as $category) {
                            $category_names[] = $category->name;
                        }
                        // Output the custom category list
                        echo implode(', ', $category_names);
                    }
                    ?>
                </div>
            </div>
            <div id="blogpost">
                <div class="card-description">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
        <?php } ?>
        <?php get_footer(); ?>