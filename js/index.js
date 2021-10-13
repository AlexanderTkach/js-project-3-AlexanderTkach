let profileImage = document.getElementById('profile-image');
let url = "https://api.github.com/users/AlexanderTkach";
fetch(url).then((response) => response.json()).then((data) => {
    let avatar = document.createElement('img');
    avatar.classList.add("avatar");
    avatar.setAttribute('src', data.avatar_url);
    avatar.setAttribute('alt', "avatar");
    profileImage.append(avatar);
})
