<!-- Artworks -->
<?php get_header();

while (have_posts()) {
    the_post();
    ?>
    <main>
         <div class="container page-container">
            <div class="gallery-conatiner">
                <i class="ion-magnet"></i>
                <?php the_content(); ?>
            </div>
            <?php } ?>
        </div>

        <?php get_footer(); ?>