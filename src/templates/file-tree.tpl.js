export default `
<li data-title="{{name}}||{{path}}||{{url}}||{{sha}}">
    <a href="#" class="item-link item-content">
        <div class="item-media">
        {{#js_if "this.type === 'dir'"}}
            <i class="icon f7-icons ios-only">folder</i>
            <i class="icon material-icons md-only">folder_fill</i>
        {{else}}
            <i class="icon f7-icons ios-only">document_text</i>
            <i class="icon material-icons md-only">insert_drive_file</i>
        {{/js_if}}
        </div>
        <div class="item-inner">
            <div class="item-title">
                {{name}}
                {{#js_if "this.type === 'file'"}}
                    <div class="item-footer">{{size}}B</div>
                {{/js_if}}
            </div>
        </div>
    </a>
</li>
`;