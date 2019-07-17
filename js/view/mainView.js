const mainView = {
    render : async () => {
        let view = /*html*/
        `<div class="container" id="loginForm">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <form>
                    <div class="form-group text-center">
                        <input type="text" class="form-control" id="loginInput" placeholder="Login">
                    </div>
                    <div class="form-group text-center">
                        <input type="password" class="form-control" id="pwdInput" placeholder="Password">
                    </div>
                    <div class="form-group text-center">
                            <a id="loginBtn" href="#/account" class="justify-content-center"><button type="button" class="btn btn-primary">Click if all good</button></a>
                    </div>                      
                </form>
            </div>
        </div> 
        <div class="row justify-content-center align-items-end my-row">
            <div class="col-md-4 my-col">
                <div class="text-center">
                    <a id="account" href="#/createAccount" class="justify-content-center">Go to create your account</a>
                </div>
            </div>                                
        </div>          
    </div>`;

    return view;
    },
};

export {mainView as default};