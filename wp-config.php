<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mingjyun_db_local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wqfp0kqmesiafqozojcyev80wxfdh4l7ve7xo8rnnepvsh3yuig0bqzy7fvq4iml' );
define( 'SECURE_AUTH_KEY',  'gpyr1on54bzxfjr4wrtmzhzagcgsmtp9hx7u8mcprquojedcqkt2wmj5goajxetk' );
define( 'LOGGED_IN_KEY',    'kwd61ytud1y3raxs4uvr5lejtasqv39vq7iolgayddjedwukpabzdlezqscspxej' );
define( 'NONCE_KEY',        'lszkozjnwqjrxsctexg6x9ahzantlvb5hpiw3touzwj0rdajw0j779thr6lcreuu' );
define( 'AUTH_SALT',        'duxbe5axgdn6h7s5oodj1mnpgefaleegjen7ppvtzwdwcxcumi6a166ct9ltpuuy' );
define( 'SECURE_AUTH_SALT', 'ux7rf1z2ikrhzsfomhs5sonmhcuesxg2xjyta4athsitxy8ot5mho4lagtd6zjvs' );
define( 'LOGGED_IN_SALT',   'xib5v6clo8xsf8w3cq9gggkgwpppepfimrhaqzzudg209ch9q3zzwvhsnw866vu1' );
define( 'NONCE_SALT',       'tyla1o57lanthwbgjdpvs74pqvzfb50esh8xsyi0mft7csjptlppbp2y276qwzaz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 20 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_AUTO_UPDATE_CORE', true );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
