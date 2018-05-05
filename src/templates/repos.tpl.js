export default `
<div class="list media-list chevron-center repos-list">
    <ul>
        {{#each this}}
        <li data-title="{{owner.login}}||{{name}}||{{default_branch }}">
            <a href="#" class="item-link item-content">
                <!--<div class="item-media">
                    <img src="path/to/img.jpg">
                </div>-->
                <div class="item-inner">
                    <div class="item-title-row">
                        <div class="item-title">
                            {{owner.login}}/{{name}}
                        </div>
                        <div class="item-after my-search-item-icon">
                            <i class="material-icons size-12">lens</i>
                            <span>{{language}}</span>
                            &nbsp&nbsp
                            <i class="material-icons size-14">star</i>
                            <span>{{stargazers_count}}</span>
                        </div>
                    </div>
                    <div class="item-text">
                        {{description}}
                    </div>
                </div>
            </a>
        </li>
        {{/each}}    
    </ul>
</div>
`;