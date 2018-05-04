export default `
<div class="card profile-card">
    <div class="card-header">
        <div class="profile-avatar">
            <img src="{{avatar_url}}" width="34" height="34" />
        </div>
        <div class="profile-name">
            <i class="icon f7-icons size-14 ios-only">person_fill</i>
            <i class="icon material-icons size-14 md-only">account_circle</i>
            <span>{{name}}</span>
        </div>
        <div class="profile-date">
            <i class="icon f7-icons size-14 ios-only">email_fill</i>
            <i class="icon material-icons size-14 md-only">email</i>
            <span>{{email}}</span>
        </div>
    </div>
    <div class="card-content card-content-padding">
        <p>Bio: {{bio}}</p>
        <p>Public Repos: {{public_repos}}</p>
    </div>
</div>
`;