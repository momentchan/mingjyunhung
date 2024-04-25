const { __ } = wp.i18n;

const i18n = {};

i18n.COMMON = {
  PLUGIN_NAME: __( 'Media File Renamer', 'media-file-renamer' ),
  TUTORIAL: __( 'Tutorial', 'media-file-renamer' ),
  SETTINGS: __( 'Settings', 'media-file-renamer' ),
  DASHBOARD: __( 'Dashboard', 'media-file-renamer' ),
  BY_JORDY_MEOW: __( 'By Jordy Meow', 'media-cleaner' ),
};

i18n.DASHBOARD = {
  NONE: __( 'None', 'media-file-renamer' ),
  AUTO_ATTACH_ALL_MESSAGE: __( 'All your posts, pages, products (and other post types) will be scanned, and if images are used in them, they will be attached. Currently, Featured Images and Product Galleries are supported.', 'media-file-renamer' ),
  AUTO_ATTACH_SELECTED_MESSAGE: __( 'All your posts, pages, products (and other post types) will be scanned, and if selected images are used in them, they will be attached. Currently, Featured Images and Product Galleries are supported.', 'media-file-renamer' ),
  AUTO_ATTACH_MESSAGE_MEDIA_CLEANER: __( '⚠️ You should first run a scan using <a href="https://meowapps.com/media-cleaner/" target="_blank">Media Cleaner</a> to create all your media references. Otherwise, the auto-attach feature will not work properly.', 'media-file-renamer' ),
  FEATURE_REQUIRED_PRO: __( 'This feature is only available in the Pro version.', 'media-file-renamer' ),
  GET_PRO_VERSION: __( 'Get the Pro Version', 'media-file-renamer' ),
  READ_TUTORIAL: __( 'Read the tutorial', 'media-file-renamer' ),
  FREE_VERSION_INSTRUCTION: __( "You must <b>backup the uploads folder and DB</b> before using the Renamer. If you don't know how, give a try to <a target='_blank' href='https://meow.click/blogvault'>BlogVault</a>. It is also highly recommanded to read the tutorial. Last but not least, check the <b>Pro Version</b>, as it adds many features and also supports the development. This message is only displayed in the free version. Thank you!", 'media-file-renamer' ),
  MODE: __( 'Mode', 'media-file-renamer' ),
  RENAME: __( 'Rename', 'media-file-renamer' ),
  MOVE: __( 'Move', 'media-file-renamer' ),
  EDIT_MEDIA: __( 'Edit Media', 'media-file-renamer' ),
  ANALYZE_LIBRARY: __( 'Analyze Library', 'media-file-renamer' ),
  AUTO_ATTACH_ALL: __( 'Auto-Attach All Media Entries', 'media-file-renamer' ),
  AUTO_ATTACH_SELECTED: __( 'Auto-Attach Selected Media Entries', 'media-file-renamer' ),
  ENTRIES: __( 'Entries', 'media-file-renamer' ),
  LOCK_ALL: __( "Lock <strong>All</strong>", 'media-file-renamer' ),
  UNLOCK_ALL: __( "Unlock <strong>All</strong>", 'media-file-renamer' ),
  RENAME_ALL: __( "Rename <strong>All</strong>", 'media-file-renamer' ),
  UNDO_ALL: __( "Undo <strong>All</strong>", 'media-file-renamer' ),
  SYNC_FIELDS: __( 'Sync Fields', 'media-file-renamer' ),
  SYNC: __( 'Sync', 'media-file-renamer' ),
  SYNCED: __( 'Synced', 'media-file-renamer' ),
  PENDING: __( 'Pending', 'media-file-renamer' ),
  RENAMED: __( 'Renamed', 'media-file-renamer' ),
  NEVER_RENAMED: __( 'Never Renamed', 'media-file-renamer' ),
  LOCKED: __( 'Locked', 'media-file-renamer' ),
  LOCK: __( 'Lock', 'media-file-renamer' ),
  UNLOCKED: __( 'Unlocked', 'media-file-renamer' ),
  ALL: __( 'All', 'media-file-renamer' ),
  THUMBNAIL: __( 'Thumbnail', 'media-file-renamer' ),
  TITLE_FILENAME: __( 'Title & Filename', 'media-file-renamer' ),
  TITLE: __( 'Title', 'media-file-renamer' ),
  ALT_TEXT: __( 'ALT Text', 'media-file-renamer' ),
  DESCRIPTION: __( 'Description', 'media-file-renamer' ),
  CAPTION: __( 'Caption', 'media-file-renamer' ),
  ATTACHED_TO: __( 'Attached To', 'media-file-renamer' ),
  FILENAME: __( 'Filename', 'media-file-renamer' ),
  PATH: __( 'Path', 'media-file-renamer' ),
  TABLE_EMPTY_MESSAGE: __( "It's all clean & nice here! 👍<br />Why not trying to give a boost to your database with <a target='_blank' href='https://wordpress.org/plugins/database-cleaner/'>Database Cleaner</a>? 😌", 'media-file-renamer' ),
  ITEMS_PER_PAGE: __( 'items per page', 'media-file-renamer' ),
  HISTORY: __( 'History', 'media-file-renamer' ),
};

i18n.DASHBOARD_FILTERS = {
  NO_TITLE: __( 'No Title', 'media-file-renamer' ),
  NO_ALT_TEXT: __( 'No ALT Text', 'media-file-renamer' ),
  NO_DESCRIPTION: __( 'No Description', 'media-file-renamer' ),
  NO_FILENAME: __( 'No Filename', 'media-file-renamer' ),
  TITLE: __( 'Title', 'media-file-renamer' ),
  ALT_TEXT: __( 'ALT', 'media-file-renamer' ),
  DESCRIPTION: __( 'Desc', 'media-file-renamer' ),
  FILENAME: __( 'File', 'media-file-renamer' ),
};

i18n.BULK_TASK = {
  FINAL_MESSAGE_WITH_ERROR: __( 'The process has finished, but {0} error(s) occurred (check your console).', 'media-file-renamer' ),
  PREPARING: __( 'Preparing...', 'media-file-renamer' ),
  AUTO_ATTACHING: __( 'Auto attaching...', 'media-file-renamer' ),
  UNDOING: __( 'Undoing...', 'media-file-renamer' ),
  UNDO_MEDIA: __( 'Undo Media', 'media-file-renamer' ),
  ANALYZING: __( 'Analyzing...', 'media-file-renamer' ),
  LOCKING: __( 'Locking...', 'media-file-renamer' ),
  UNLOCKING: __( 'Unlocking...', 'media-file-renamer' ),
  RENAMING: __( 'Renaming', 'media-file-renamer' ),
  SYNCING_MEDIA: __( 'Syncing Media', 'media-file-renamer' ),
  MOVE_ERROR: __( 'Please check the files at least 1 file you would like to move in bulk.', 'media-file-renamer' ),
  MOVING: __( 'Moving', 'media-file-renamer' ),
};

i18n.CONTEXT = {
  UPDATING: __( 'Updating...', 'media-file-renamer' ),
  MODAL_DOES_NOT_EXIST: __( "The modal {0} doesn't exist.", 'media-file-renamer' ),
  FAILED_TO_MOVE: __( 'Failed to move the folder/gallery.', 'media-file-renamer' ),
};

i18n.RENAMER_FIELDS = {
  UNLOCK_DESCRIPTION: __( 'Unlock, to allow future actions', 'media-file-renamer' ),
  LOCK_DESCRIPTION: __( 'Lock, to avoid future actions', 'media-file-renamer' ),
  FILENAME_ALREADY_EXISTS: __( "The ideal filename ({0}) already exists.", 'media-file-renamer' ),
  ROLLBACK_TO_ORIGINAL: __( 'Rollback to original', 'media-file-renamer' ),
  RENAME_AUTOMATICALLY: __( 'Rename automatically', 'media-file-renamer' ),
  AUTO_RENAME: __( 'Auto', 'media-file-renamer' ),
  RENAME_MANUALLY: __( 'Rename manually', 'media-file-renamer' ),
  CANCEL_MANUAL_RENAME: __( 'Cancel manual rename', 'media-file-renamer' ),
  CANCEL: __( 'Cancel', 'media-file-renamer' ),
  APPLY: __( 'Apply', 'media-file-renamer' ),
  MOVE: __( 'Move', 'media-file-renamer' ),
};

i18n.MODAL = {
  RUN: __( 'Run', 'media-file-renamer' ),
  I_NEED_PRO_VERSION: __( 'I need the Pro Version', 'media-file-renamer' ),
  CLOSE: __( 'Close', 'media-file-renamer' ),
  ERROR_TITLE: __( 'Error', 'media-file-renamer' ),
  AUTO_RETRY: __( 'AUTO RETRY', 'media-file-renamer' ),
  ALWAYS_SKIP: __( 'ALWAYS SKIP', 'media-file-renamer' ),
  RETRY: __( 'Retry', 'media-file-renamer' ),
  SKIP: __( 'SKIP', 'media-file-renamer' ),
  STOP: __( 'Stop', 'media-file-renamer' ),
  AUTO_RETRY_DESCRIPTION: __( 'AUTO RETRY will retry the actions up to 10 times. At every retry, it will increase the delay (in order to avoid timeouts). ALWAYS SKIP will simply skip the failed action (not recommended).', 'media-file-renamer' ),
  EDIT_ALT_FIELD: __( 'Edit the alt field', 'media-file-renamer' ),
  MOVE_ALL_TITLE: __( 'Move selected', 'media-file-renamer' ),
  MOVE_ALL_CONTENT: __( 'Where would you like to move these files (in the /uploads directory)?', 'media-file-renamer' ),
  SELECTABLE_FOLDERS: __( 'Selectable folders', 'media-file-renamer' ),
  FORCE_REFRESH_DIRECTORIES: __( 'Refresh', 'media-file-renamer' ),
  SELECTABLE_FOLDERS_REQUIRED_PRO: __( 'This feature only for Pro users. If you are pro user, you can go through the folders.', 'media-file-renamer' ),
  AUTO_ATTACH_TITLE: __( 'Automatically attach your images to your posts', 'media-file-renamer' ),
  RENAME_ALL_TITLE: __( 'You are about to rename all the files in this table', 'media-file-renamer' ),
  RENAME_ALL_CONTENT: __( 'Renaming files is a dangerous operation. Please make sure you made a backup or your entire WordPress install. Should we start?', 'media-file-renamer' ),
  RENAME_ALL_FIELDS: __( 'All the Metadata fields you have enbaled will also be generated by AI Vision.', 'media-file-renamer' ),
  SYNC_FIELDS_TITLE: __( "Synchronize Fields of All Entries", 'media-file-renamer' ),
  SYNC_FIELDS_CONTENT: __( 'You are about to synchronize all your unlocked entries. Check the Fields Syncing section in your Settings for more information. Should we continue?', 'media-file-renamer' ),
  UNDO_ALL_TITLE: __( 'You are about to undo the renaming for all your files', 'media-file-renamer' ),
  UNDO_ALL_CONTENT: __( 'Are you sure you would like to proceed?', 'media-file-renamer' ),
  SUCCESS_TITLE: __( 'Success', 'media-file-renamer' ),
  MOVE_TITLE: __( 'Move this file', 'media-file-renamer' ),
  MOVE_CONTENT: __( 'Where would you like to move this file (in the /uploads directory)?', 'media-file-renamer' ),
  CREATE_FOLDER: __( 'Create Folder', 'media-file-renamer' ),
  EXIT: __( 'Exit', 'media-file-renamer' ),
  RENAME_TITLE: __( 'Rename your media', 'media-file-renamer' ),
};

i18n.AUTO_RENAME_OPTIONS = {
  BASED_ON_MEDIA_TITLE: __( 'Based on Media Title', 'media-file-renamer' ),
  BASED_ON_ATTACHED_POST: __( 'Based on Attached Post (ACF Field)', 'media-file-renamer' ),
  BASED_ON_ATTACHED_POST_TITLE: __( 'Based on Attached Post Title', 'media-file-renamer' ),
  BASED_ON_ALTERNATIVE_TEXT: __( 'Based on Alternative Text', 'media-file-renamer' ),
  ANONYMIZE_WITH_MD5: __( 'Anonymize with MD5', 'media-file-renamer' ),
  DISABLE_AUTOMATIC_RENAME: __( 'Disable Automatic Rename', 'media-file-renamer' ),
};

i18n.MEDIA_LIBRARY_FIELD_OPTIONS = {
  NONE: __( 'None', 'media-file-renamer' ),
  FULL: __( 'Full', 'media-file-renamer' ),
  MODAL: __( 'Modal', 'media-file-renamer' ),
};

i18n.SETTINGS = {
  DESCRIPTION: __( "It works out of the box, the default settings are good for most installs. However, you should really have a look at the <a href='https://meowapps.com/plugin/media-file-renamer/'>tutorial</a>. If you are a SEO guru or someone who loves having a perfectly neat filesystem, it is recommended to use automatic renaming first, then to tweak specific files with manual renaming. The <a href='/wp-admin/upload.php?page=mfrh_dashboard'>Renamer Dashboard</a> makes it very easy.", 'media-file-renamer' ),
  AUTO: __( 'Auto', 'media-file-renamer' ),
  AUTOMATIC: __( 'Automatic', 'media-file-renamer' ),
  AUTOMATIC_DESCRIPTION: __( "This plugin's main goal is to make the process of optimizing your filenames entirely automatic. By default, your files will be named after the title of your media entry.", 'media-file-renamer' ),
  MANUAL: __( 'Manual', 'media-file-renamer' ),
  BASIC: __( 'Basic', 'media-file-renamer' ),
  RENAMING_METHODS: __( 'Renaming Methods', 'media-file-renamer' ),
  EXTRA_OPTIONS: __( 'Extra Options', 'media-file-renamer' ),
  METADATA_FIELDS: __( 'Metadata Fields', 'media-file-renamer' ),
  METADATA_FIELDS_HELP: __( 'You can rename those fields directly from the Media File Renamer dashboard. Those fields also support AI Suggestions.', 'media-file-renamer' ),
  ON_UPLOAD_HELP: __( 'When you upload a file, the plugin will automatically update the selected metadata based on the chosen method.', 'media-file-renamer' ),
  FEATURES: __( 'Features', 'media-file-renamer' ),
  ADVANCED: __( 'Advanced', 'media-file-renamer' ),
  RENAMING: __( 'Renaming', 'media-file-renamer' ),
  FIELDS_SYNCING: __( 'Fields Syncing', 'media-file-renamer' ),
  FIELDS_SYNCING_DESCRIPTION: __( 'The fields in the database will be synchronized, but the data already written in your HTML will not be overwritten.', 'media-file-renamer' ),
  AUTO_LOCK: __( 'Auto Lock', 'media-file-renamer' ),
  ON_UNINSTALL: __( 'On Uninstall', 'media-file-renamer' ),
  PERFORMANCE: __( 'Performance', 'media-file-renamer' ),
  FOR_DEVELOPERS: __( 'For Developers', 'media-file-renamer' ),
  FOR_ADVANCED_USERS_DEVELOPERS: __( 'For Advanced Users & Developers', 'media-file-renamer' ),
  LICENSE_PRO: __( 'License (Pro)', 'media-file-renamer' ),
  LOGS_DEBUG: __( 'Logs & Debug', 'media-file-renamer' ),
  SIDE_UPDATES: __( 'Side Updates', 'media-file-renamer' ),
  SIDE_UPDATES_DESCRIPTION: __( "When the files are renamed, many links to them on your WordPress might be broken. Those options are updating the references to those files. <strong>Give it a try, every install is different and it might not work for certain kind of references.</strong>", 'media-file-renamer' ),
  ENABLE: __( 'Enable', 'media-file-renamer' ),
  DISABLE: __( 'Disable', 'media-file-renamer' ),
  AI_ENGINE_SYNC: __( '🤖 When syncing using AI Engine, the plugin will use AI to generate <b>each field</b> you selected individually. This is a very powerful feature, but it might take a bit of time to process.', 'media-file-renamer' ),
  POSTS: __( 'Posts', 'media-file-renamer' ),
  POSTS_DESCRIPTION: __( "Update the references to the renamed files in the <strong>content</strong> of the posts (of all types).", 'media-file-renamer' ),
  EXCERPTS: __( 'Excerpts', 'media-file-renamer' ),
  EXCERPTS_DESCRIPTION: __( "Update the references to the renamed files in the <strong>excerpts</strong> of the posts (of all types).", 'media-file-renamer' ),
  POSTS_META: __( 'Post Meta', 'media-file-renamer' ),
  POSTS_META_DESCRIPTION: __( "Update the references in the <strong>custom fields</strong> of the posts (including pages and custom types metadata).", 'media-file-renamer' ),
  ELEMENTOR: __( 'Elementor', 'media-file-renamer' ),
  ELEMENTOR_DESCRIPTION: __( "Update the references in the <strong>encrypted data</strong> of the posts handled by Elementor. <span>This will probably slow down the renaming extremely and cause timeouts. Test it carefully.</span>", 'media-file-renamer' ),
  METHOD: __( 'Method', 'media-file-renamer' ),
  METHOD_DESCRIPTION: __( 'Attached Post includes all kinds of Post Types: Posts, Pages, Products, etc.', 'media-file-renamer' ),
  ACF_FIELD_NAME: __( 'ACF Field Name', 'media-file-renamer' ),
  IMAGES_ONLY: __( 'Images Only', 'media-file-renamer' ),
  IMAGES_ONLY_DESCRIPTION: __( 'Restricts the renaming to images and icons. Nothing else will be renamed.', 'media-file-renamer' ),
  FEATURED_ONLY: __( 'Featured Only', 'media-file-renamer' ),
  FEATURED_ONLY_DESCRIPTION: __( 'Restricts the renaming to Featured Images only.', 'media-file-renamer' ),
  ON_UPLOAD: __( 'On Upload', 'media-file-renamer' ),
  AUTO_UPLOAD: __( 'Auto On Upload', 'media-file-renamer' ),
  ON_UPLOAD_DESCRIPTION_ON_POST_TITLE: __( "Note: The Attached Post Title <u>will not be used</u> at the time of the upload due to WordPress API constraints.", 'media-file-renamer' ),
  SYNC_WITH_FILENAME: __( 'Sync with filename', 'media-file-renamer' ),
  SLUG_PERMALINK: __( 'Slug/Permalink', 'media-file-renamer' ),
  SLUG_PERMALINK_DESCRIPTION: __( 'Better to keep this un-checked as the link might have been referenced somewhere else.', 'media-file-renamer' ),
  TRANSLITERATION: __( 'Transliteration', 'media-file-renamer' ),
  TRANSLITERATION_LABEL: __( 'Enable (Recommended)', 'media-file-renamer' ),
  TRANSLITERATION_DESCRIPTION: __( "Replace accents, emoticons, diacritics, umlauts, cyrillic and any kind of tricky characters by their ASCII equivalent.<br /> <i>Examples: tête &#8594; tete, schön &#8594; schon, Добро &#8594; dobro, etc.</i>", 'media-file-renamer' ),
  UNDO: __( 'Undo', 'media-file-renamer' ),
  UNDO_DESCRIPTION: __( 'An undo icon will be added to the UI. This allows to rollback to the original filename.', 'media-file-renamer' ),
  MOVE: __( 'Move', 'media-file-renamer' ),
  MOVE_DESCRIPTION: __( 'A move button will be added, and will allow you to move a file to another directory.', 'media-file-renamer' ),
  LOCK_DESCRIPTION: __( 'A lock icon will be added, and will allow you to lock a file to avoid future actions.', 'media-file-renamer' ),
  DASHBOARD: __( 'Dashboard', 'media-file-renamer' ),
  RENAME_FIELD: __( 'Rename Field', 'media-file-renamer' ),
  RENAME_FIELD_DESCRIPTION: __( 'An editable field will be added.', 'media-file-renamer' ),
  RENAME_FIELD_PLACE_DESCRIPTION: __( 'An editable field will be added to edit your filenames.', 'media-file-renamer' ),
  AI: __( 'AI', 'media-file-renamer' ),
  AI_SUGGESTIONS: __( 'AI Suggestions', 'media-file-renamer' ),
  AI_SUGGESTIONS_DESCRIPTION: __( 'This will give you suggestions based on what the AI sees in your metadata.', 'media-file-renamer' ),
  AI_VISION: __( 'AI Vision', 'media-file-renamer' ),
  AI_VISION_DESCRIPTION: __( 'This will analyze your images and give you perfect suggestions based on your images.', 'media-file-renamer' ),
  AI_VISION_ON_UPLOAD: __( 'AI Vision On Upload', 'media-file-renamer' ),
  AI_VISION_ON_UPLOAD_DESCRIPTION: __( 'AI Vision suggests refined Titles, Descriptions, and Alt Texts, potentially extending processing times.', 'media-file-renamer' ),
  AI_VISION_ON_UPLOAD_WARNING: __( '⚠️ You already have Clean Uploads enabled, which will overwrite the title, description, and alt text.', 'media-file-renamer' ),
  SANITIZE: __( 'Sanitize', 'media-file-renamer' ),
  SANITIZE_DESCRIPTION: __( 'Everything you type will be sanitized. This way, you can be certain the filename is safe and tidy.', 'media-file-renamer' ),
  FORCE_RENAME: __( 'Force Rename', 'media-file-renamer' ),
  FORCE_RENAME_DESCRIPTION: __( 'Update the references to the file even if the file renaming itself was not successful. You might want to use that option if your install is broken and you are trying to link your Media to files for which the filenames has been altered (after a migration for exemple)', 'media-file-renamer' ),
  NUMBERED_FILES: __( 'Numbered Files', 'media-file-renamer' ),
  NUMBERED_FILES_LABEL: __( 'Enable Numbering', 'media-file-renamer' ),
  NUMBERED_FILES_DESCRIPTION: __( 'Identical filenames will be allowed by the plugin and a number will be appended automatically (myfile.jpg, myfile-2.jpg, myfile-3.jpg, etc).', 'media-file-renamer' ),
  SYNCHRONIZE: __( 'Synchronize', 'media-file-renamer' ),
  ALT_TEXT: __( 'ALT Text', 'media-file-renamer' ),
  ALT_TEXT_DESCRIPTION: __( 'The ALT Text will be synchronized with the same source used for the filename.', 'media-file-renamer' ),
  MEDIA_TITLE_DESCRIPTION: __( 'The Media Title will be synchronized with the same source used for the filename.', 'media-file-renamer' ),
  PHP_ERROR_LOGS: __( 'PHP Error Logs', 'media-file-renamer' ),
  PHP_ERROR_LOGS_DESCRIPTION: __( 'The logs will also be written in the PHP error logs.', 'media-file-renamer' ),
  LOGS: __( 'Logs', 'media-file-renamer' ),
  LOGS_DESCRIPTION: __( 'Simple logging that explains which actions has been run.', 'media-file-renamer' ),
  REFRESH_LOGS: __( 'Refresh Logs', 'media-file-renamer' ),
  CLEAR_LOGS: __( 'Clear Logs', 'media-file-renamer' ),
  SQL_LOGS: __( 'SQL Logs', 'media-file-renamer' ),
  SQL_LOGS_DESCRIPTION: __( 'The files sql.log and sql_revert.log will be created under the log\'s directory and will include the raw SQL queries which were run by the plugin. If there is an issue, the revert SQL file can help you.', 'media-file-renamer' ),
  GUID: __( 'GUID', 'media-file-renamer' ),
  GUID_DESCRIPTION: __( 'The GUID will be renamed like the new filename. Better to keep this un-checked.', 'media-file-renamer' ),
  CASE_INSENSITIVE: __( 'Case Insensitive', 'media-file-renamer' ),
  CASE_INSENSITIVE_DESCRIPTION: __( 'This will consider the file such as "abc.jpg" and "ABC.JPG" as the same file. More information <a target="_blank" href="https://meowapps.com/media-file-renamer-faq-issues/">here</a>. You should check this if you are on a Windows-based server.', 'media-file-renamer' ),
  ENABLE_UNSAFE: __( 'Enable (Unsafe)', 'media-file-renamer' ),
  RENAME_ON_POST_SAVE: __( 'Rename on Post Save', 'media-file-renamer' ),
  RENAME_ON_POST_SAVE_DESCRIPTION: __( "You can modify the titles of your media while editing a post but, of course, the plugin can't update the HTML at this stage. With this option, the plugin will update the filenames and HTML after that you saved the post.", 'media-file-renamer' ),
  DELETE_ALL: __( 'Delete all', 'media-file-renamer' ),
  PLUGIN_DATA: __( 'Plugin Data', 'media-file-renamer' ),
  PLUGIN_DATA_DESCRIPTION: __( "The database and all the options of the plugin will be removed on uninstall. This also includes the information about the plugin's trash.", 'media-file-renamer' ),
  DELAY: __( 'Delay (in ms)', 'media-file-renamer' ),
  DELAY_DESCRIPTION: __( "Time to wait between each request (in milliseconds). The overall process is intensive so this gives the chance to your server to chill out a bit. A very good server doesn't need it, but a slow/shared hosting might even reject requests if they are too fast and frequent. Recommended value is actually 0, 100 for safety, 2000 or 5000 if your hosting is kind of cheap.", 'media-file-renamer' ),
  AUTOMATIC_RENAME: __( 'After Automatic Rename', 'media-file-renamer' ),
  AUTOMATIC_RENAME_DESCRIPTION: __( 'This is disabled by default; your media will be always renamed when needed.', 'media-file-renamer' ),
  MANUAL_RENAME: __( 'After Manual Rename', 'media-file-renamer' ),
  MANUAL_RENAME_DESCRIPTION: __( 'This is enabled by default; when you rename a media manually, it normally means that you want to fix the filename by yourself.', 'media-file-renamer' ),
  LOCK: __( 'Lock', 'media-file-renamer' ),
  RESET_OPTIONS: __( 'Reset Options', 'media-file-renamer' ),
  EXPORT_OPTIONS: __( 'Export Options', 'media-file-renamer' ),
  IMPORT_OPTIONS: __( 'Import Options', 'media-file-renamer' ),
  UI: __( 'UI', 'media-file-renamer' ),
  AI: __( 'AI', 'media-file-renamer' ),
  AI_ENGINE_REQUIRED: __( "<a href='https://wordpress.org/plugins/ai-engine/' target='_blank'>AI Engine</a> needs to be installed. It's free!", 'media-file-renamer' ),
  AI_ENGINE_INSTALLED: __( "AI Engine enabled", 'media-file-renamer' ),
  ALT_FIELD: __( 'ALT Field', 'media-file-renamer' ),
  ALT_FIELD_DESCRIPTION: __( 'An edit icon will be added, and will allow you to edit the Alternative Text.', 'media-file-renamer' ),
  ATTACHED_TO: __( 'Attached To', 'media-file-renamer' ),
  ATTACHED_TO_DESCRIPTION: __( 'The Attached To column will be added to the UI.', 'media-file-renamer' ),
  MEDIA_LIBRARY_FIELD: __( 'Media Library Field', 'media-file-renamer' ),
  MEDIA_LIBRARY_FIELD_DESCRIPTION: __( 'How you want the Renamer Field to be displayed in the Media Library.', 'media-file-renamer' ),
  HISTORY_DESCRIPTION: __( 'The History column will be added to the dashboard table.', 'media-file-renamer' ),
  HISTORY_LIMIT: __( 'History Limit', 'media-file-renamer' ),
  HISTORY_LIMIT_DESCRIPTION: __( 'The number of entries to keep in the History column.', 'media-file-renamer' ),
  SYNC_DESCRIPTION: __( 'Description', 'media-file-renamer' ),
  SYNC_CAPTION: __( 'Caption', 'media-file-renamer' ),
  DESCRIPTION_DESCRIPTION: __( 'The Description will be synchronized with the same source used for the filename.', 'media-file-renamer' ),
  SYNC_CAPTION_DESCRIPTION: __( 'The Caption will be synchronized with the same source used for the filename.', 'media-file-renamer' ),
  DISABLE_MANUAL_SYNC: __( 'Manual Sync', 'media-file-renamer' ),
  DISABLE_MANUAL_SYNC_DESCRIPTION: __( 'When you rename a file the plugin will automatically sync the fields you have enabled in "Fields Syncing". If you want to disable this behavior when manually renaming, check this option.', 'media-file-renamer' ),
};

i18n.ON_UPLOAD_OPTIONS = {
  NONE: __( 'None', 'media-file-renamer' ),
  VISION: __( 'Use AI Vision', 'media-file-renamer' ),
  CLEAN: __( 'Clean Upload', 'media-file-renamer' ),
  AUTO: __( 'EXIF Title', 'media-file-renamer' ),
};

i18n.ON_UPLOAD_DESCRIPTIONS = {
  NONE: __( 'Nothing will be done on upload.', 'media-file-renamer' ),
  VISION_RENAME_AI_ON_UPLOAD: __( 'Generate metadata with AI Vision. It increases processing times.', 'media-file-renamer' ),
  CLEAN_UPLOAD: __( 'Generate metadata based on a refined filename.', 'media-file-renamer' ),
  ON_UPLOAD: __( 'Rename files with their EXIF titles, if present.', 'media-file-renamer' ),
};

export default i18n;

