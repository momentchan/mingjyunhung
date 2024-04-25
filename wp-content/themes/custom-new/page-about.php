<!-- About -->
<?php get_header();

while (have_posts()) {
    the_post();
    ?>
    <main>
         <div class="container page-container">
            <div class="about-conatiner">
                <img id="self-pic" src="<?php echo get_the_post_thumbnail_url(get_the_ID()); ?>">
                <div id="self-intro">
                    <?php the_content(); ?>
                </div>
            </div>
            <?php } ?>
        </div>

        <?php get_footer(); ?>