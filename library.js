const meta = module.parent.require("./meta");
const async = module.parent.require("async");
const db = module.parent.require("./database");
const categories = module.parent.require("./categories");
const winston = module.parent.require('winston');

const MandatoryTag = {
    config: {},
    init(params, callback) {
        let app = params.router;
        let middleware = params.middleware;

        app.get("/admin/plugins/mandatory-tag", middleware.admin.buildHeader, renderAdmin);
        app.get("/api/admin/plugins/mandatory-tag", renderAdmin);

        meta.settings.get("mandatory-tag", (err, options) => {
            if (err) {
                winston.warn(`[plugin/mandatorytag]  Unable to retrieve settings, will keep defaults: ${err.message}`);
            } else {
                MandatoryTag.config = options;
            }
        });

        callback();
    },
    addToAdminNav(header, callback) {
        header.plugins.push({
            route: "/plugins/mandatory-tag",
            name: "Mandatory Tag"
        });
        callback(null, header);
    },
    topicPost(data, callback) {
        checkTags(data, data.cid, data.tags, callback);
    },
    topicEdit(data, callback) {
        checkTags(data, data.topic.cid, data.data.tags, callback);
    }
};

function checkTags(data, cid, tags, callback)
{
    if(tags && tags.length < MandatoryTag.config['cid-' + cid]) {
        return callback(new Error('[[mandatorytag:no-tags,' + MandatoryTag.config['cid-' + cid] + ']]'));
    }
    callback(null, data);
}

function renderAdmin(req, res, next) {
    async.waterfall([
        async.apply(db.getSortedSetRange, "categories:cid", 0, -1),
        (cids, next) => {
            categories.getCategoriesFields(cids, ["cid", "name"], next);
        }
    ], (err, data) => {
        if (err)
            return next(err);
        res.render("admin/plugins/mandatory-tag", {categories: data});
    });
}

module.exports = MandatoryTag;
