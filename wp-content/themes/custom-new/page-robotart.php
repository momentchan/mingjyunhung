<!-- About -->
<?php get_header();

while (have_posts()) {
    the_post();
    ?>
    <main>
         <div class="container page-container">
            <?php the_content(); ?>
            <?php } ?>
        </div>

        <?php get_footer(); ?>