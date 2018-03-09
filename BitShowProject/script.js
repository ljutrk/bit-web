const dataModule = (() => {

    class User {
        constructor(id, username, avatar){
            this.id = id;
            this.username = username;
            this.avatar = avatar;
        }
    }

    const adaptData = (users) => {
        return users.map ((user) =>{
        return new User (user.id, user.login, user.avatar_url)
    })}

})();

const uiModule = () => ({

    const displayUsers = (uses) => {
        users.forEach
    }

})();

const mainModule = ((data, ui) => {

    $(() => {
        $.get('https://api.github.com/search/users?q=marsicdev')
            .done((response) => {
                console.log("Done!", response);

                const adaptedUsers = data.adaptData(response.items)
            })
            .fail((err) => {
                console.log("error!", err);

            })
    })

})(dataModule, uiModule);