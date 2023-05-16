import './styling/signInPage.css'

function SignInPage(){
    return(
        <div className='SignInPage'>
           <div class="containerSignIn">
    <h2>Sign In</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username"/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"/>
      </div>
      <div class="form-group">
        <button type="submit">Sign In</button>
      </div>
    </form>
  </div> 
</div>
    );
};

export default SignInPage