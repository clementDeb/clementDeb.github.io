const mainView = {
    render : async () => {
        let view = /*html*/
        `<div class="container" id="loginForm">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="form-group text-center">
                        <a id="createNewBoard" class="justify-content-center"><button type="button" class="btn btn-primary">Create New Board</button></a>
                </div>
            </div>
        </div>         
    </div>`;

    return view;
    },
};

export {mainView as default};