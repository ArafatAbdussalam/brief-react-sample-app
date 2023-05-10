import React from 'react'


const Users = () => {

    const USER_INFO = {
        NAME: "Arafat",
        LIKES: "food"
    }

    let isLoggedIn = false;
    ///let content;
    // if (isLoggedIn) {
    //    content = <AdminPanel />
    // } else {
    //    content = <LoginForm />
    //}

    const adminPanel = <h3>"this is an admin panel"</h3>
    const loginForm = <h3>"this is a login form"</h3>
    // input {content} in return statement <h1>{content}</h1>
    // { isLoggedIn && {adminPanel} }
    // {isLoggedIn ? (
    //     {adminPanel}
    //   ) : (
    //     {loginForm}
    //   )}

  return (
    <div>
      <h1>{USER_INFO.NAME}</h1>
      <h2>{USER_INFO.LIKES}</h2>

     
      
      
    </div>
  )
}

export default Users
