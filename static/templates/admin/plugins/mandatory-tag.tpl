<form role="form" class="mandatory-tag-settings">
    <div class="row">
        <div class="col-sm-2 col-xs-12 settings-header">Minimum tags for category</div>
        <div class="col-sm-10 col-xs-12">
            <!-- BEGIN categories -->
            <div class="form-group">
                <div class="row">
                    <div class="col-xs-6">
                        <label for="cid-{categories.cid}">{categories.name}</label>
                    </div>
                    <div class="col-xs-6">
                        <input id="cid-{categories.cid}" name="cid-{categories.cid}" class="form-control" type="number" value="0">
                    </div>
                </div>
				
			</div>
            <!-- END -->
        </div>
    </div>
</form>

<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">save</i>
</button>
