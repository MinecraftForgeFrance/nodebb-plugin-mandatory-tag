/* globals define, $, socket */

define('admin/plugins/mandatory-tag', ['settings'], function (Settings) {
    const MandatoryTag = {};

    MandatoryTag.init = function () {
        Settings.load('mandatory-tag', $('.mandatory-tag-settings'));

        $('#save').on('click', function () {
            Settings.save('mandatory-tag', $('.mandatory-tag-settings'), function () {
                app.alert({
                    type: 'success',
                    alert_id: 'mandatory-tag-saved',
                    title: 'Settings Saved',
                    message: 'Please reload your NodeBB to apply these settings',
                    clickfn: function () {
                        socket.emit('admin.reload');
                    }
                })
            });
        });
    };

    return MandatoryTag;
});
