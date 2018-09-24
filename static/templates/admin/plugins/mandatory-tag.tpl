<form role="form" class="mandatory-tag-settings">
    <div class="row">
        <div class="col-sm-2 col-xs-12 settings-header">General Settings</div>
        <div class="col-sm-10 col-xs-12">
            <!-- BEGIN categories -->
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="{categories.cid}">
                    {categories.name}
                </label>
            </div>
            <!-- END -->
        </div>
    </div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
