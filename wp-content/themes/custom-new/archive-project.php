 <!-- Project -->
 <?php get_header(); ?>
 <main>
     <div class="container page-container">
        <div class="category-container">
            <ul class="category-items">
                <?php
                // Get terms for custom category taxonomy
                $terms = get_terms( array(
                    'taxonomy' => 'category',
                    'hide_empty' => false, // Change to true if you want to hide empty categories
                ) );

                // Check if terms exist
                if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
                    foreach ( $terms as $index => $term ) {
                        $active_class = $index === 0 ? 'active' : ''; // Set active class for the first term
                        $link = $index === 0 ? site_url('/projects/') : get_term_link( $term ); // Use parent link for the first term, otherwise use the term link
                        echo '<li><a href="' . $link . '" class="' . $active_class . '">' . $term->name . '</a></li>';
                    }
                }
                ?>
            </ul>
        </div>
        <section>
            <?php
                while (have_posts()) {
                    the_post();
                    if ( get_post_status ( get_the_ID() ) != 'private' ) {
                    ?>
                <div class="project-card">
                    <img src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>" alt="Card Image ">
                    <div class="project-card-description">
                        <a href="<?php permalink_link() ?>">
                            <h3><?php the_title(); ?></h3>
                        </a>
                    </div>
                </div>
            <?php }
            }
                wp_reset_query(); ?>
        </section>
    </div>

    <?php get_footer(); ?>