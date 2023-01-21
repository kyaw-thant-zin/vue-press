<?php get_header(); ?>
<?php
  $TEMPLATE_URI = get_template_directory_uri();
  $TEMPLATE_RELATIVE_PATH = parse_url($TEMPLATE_URI, PHP_URL_PATH);
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <div id="app"></div>
    </main><!-- #main -->
</div><!-- #primary -->

<script type="module" src="<?php echo $TEMPLATE_RELATIVE_PATH; ?>/dist/assets/main.js"></script>

<?php
get_footer();