import React from "react";
import './Welcomescreen.css';
function Welcomescreen(props) {
return props.showWelcomeScreen ?
(
<div className="Welcomescreen">
<h1 ClassName="title">meet</h1>
<h4>
Events from around the world at your fingertips
</h4>
<div className="button_cont" align="center">
<div class="google-btn">
<div class="google-icon-wrapper">
<img
class="google-icon"
src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
alt="Google sign-in"
/>
</div>
<button onClick={() => { props.getAccessToken() }}
rel="nofollow noopener"
class="btn-text"
>
<b>Sign in with google</b>
</button> 
</div>
</div>
<a
href="https://a17private.github.io/meet/privacy.html"
rel="nofollow noopener"
>
Privacy policy
</a>
</div>
)
: null
}
export default Welcomescreen;
