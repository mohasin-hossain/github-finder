const searchBtn = document.querySelector('#searchBtn');
const searchUser = document.querySelector('#searchUser');
const ui = new UI();

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(response => response.json())
            .then(data => {
                if(data.message == 'Not Found') {
                    ui.showAlert("User not found!", "alert alert-danger");
                } else {
                    ui.showProfile(data)
                }
            });
    } else {
        ui.clearProfile();
    }
})