import React from 'react';


class Register extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name:''
  }
}

onNameChange = (event) => {
  this.setState({name: event.target.value})
}


  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = (event) => {
    event.preventDefault(); 
    fetch("https://mysterious-sea-66706.herokuapp.com/register",{
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name:this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id){  
          this.props.loadUser(user)
          this.props.onRouteChange ('home');
        }
      })
  }


render() {
  return (
    <article className="br4 ba  b--blue-10 mv4 w-100 w-50-m w-25-l mw7 shadow-6 center">
    <main className="pa4 blue-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Full Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
        type="text" 
        placeholder = "type in your full name"
        name="Full Name" 
         id="FullName"
         onChange = {this.onNameChange}
         required  
         />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
        type="email" 
        placeholder = "type in your email address"
        name="email-address"  
        id="email-address"
        onChange = {this.onEmailChange}
        required  
        />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" 
        type="password" 
        placeholder = "type in your password"
        name="password" 
         id="password"
         onChange = {this.onPasswordChange} 
         required  
         />
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
       onClick ={this.onSubmitRegister}
       type="submit" 
       value="Register"/>
    </div>
  </div>
</main>
</article>
  );
}
}
export default Register;