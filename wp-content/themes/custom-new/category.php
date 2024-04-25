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
                        $active_class = is_category( $term->slug ) ? 'active' : ''; // Check if the current term is the selected category
                        $link = $index === 0 ? site_url('/projects/') : get_term_link( $term ); // Use parent link for the first term, otherwise use the term link
                        echo '<li><a href="' . $link . '" class="' . $active_class . '">' . $term->name . '</a></li>';
                    }
                }

                ?>
            </ul>
        </div>
        
        <section>
                <?php
                    $current_category_title = single_cat_title('', false );
                    $category = get_category_by_slug( sanitize_title( $current_category_title ) );

                    $args = [
                        'post_type' => 'project',
                        'posts_per_page' => -1,
                    ];

                    if ($category) {
                        $args['category__in'] = $category->term_id;
                    }

                    $query = new WP_Query( $args );

                    while ( $query->have_posts()) {
                        $query->the_post();
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

        <script>
            window.addEventListener('resize', function() {
            var section = document.querySelector('section');
            var cards = document.getElementsByClassName ('project-card');
            
            var cardWidth = cards[0].offsetWidth
            var sectionWidth = section.offsetWidth;

            if (sectionWidth - cardWidth * cards.length > cardWidth * 0.5) {
                section.style.justifyContent = 'flex-start';
                section.style.gap = '20px';
            } else {
                section.style.justifyContent = 'space-between';
            }
            });
            window.dispatchEvent(new Event('resize'));
        </script>
     </div>

    <?php get_footer(); ?>