/**
 * Created by Awesome on 3/1/2016.
 */

// use strict
'use strict';

// bind methods
var controller = require(global.appRoot + '/bin/bundles/core/controller');

/**
 * build admin controller
 *
 * @mount /admin
 * @acl   {test:['admin'],fail:{redirect:"/"}}
 */
class adminController extends controller {
    /**
     * construct admin controller
     *
     * @param props
     */
    constructor(props) {
        // run super
        super(props);

        // bind methods
        this.indexAction = this.indexAction.bind(this);
    }

    /**
     * index action
     *
     * @param req
     * @param res
     *
     * @name     ADMIN_HOME
     * @route    {get} /
     * @menu     {MAIN}  Admin
     * @menu     {ADMIN} Admin Home
     * @priority 10
     */
    indexAction(req, res) {
        res.render('admin', {
            'layout' : 'admin.layout.hbs'
        });
    }
}

/**
 * export admin controller
 *
 * @type {adminController}
 */
module.exports = adminController;