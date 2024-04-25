<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
    <title>Ming Jyun Hung </title>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id="></script>

	<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '', { 'optimize_id': 'GTM-WXTW6HZ'});

        document.addEventListener('DOMContentLoaded', function() {
            var section = document.querySelector('section');
            section.classList.add('animate-in');
        });
	</script>
</head>

<body>
    <nav <?php if (is_front_page()) echo 'id="front-page-nav"' ?>>
        <div class="container">
            <div class="header-container">
                <a id="header-title" href="<?php echo site_url(''); ?>">
                    MING JYUN HUNG
                </a>
            </div>
            
            <div class="menu-container">
            <ul>
                <li>
                    <a href="<?php echo site_url('/projects/'); ?>" <?php if (strpos($_SERVER['REQUEST_URI'], '/projects/') !== false) echo 'class="active"' ?>>PROJECTS</a>
                </li>
                <li>
                    <a href="<?php echo site_url('/robotart/'); ?>" <?php if (strpos($_SERVER['REQUEST_URI'], '/robotart/') !== false) echo 'class="active"' ?>>ROBOTART</a>
                </li>
                <li>
                    <a href="<?php echo site_url('/artworks/'); ?>" <?php if (strpos($_SERVER['REQUEST_URI'], '/artworks/') !== false) echo 'class="active"' ?>>ARTWORKS</a>
                </li>
                <li>
                    <a href="<?php echo site_url('/about/'); ?>" <?php if (strpos($_SERVER['REQUEST_URI'], '/about/') !== false) echo 'class="active"' ?>>ABOUT</a>
                </li>
            </ul>
            </div>
            </div>
        </div>
    </nav>