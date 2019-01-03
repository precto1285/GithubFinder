// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // console.log(userText);
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);

          // Show Repos
          ui.showRepos(data.repos);
        }
        // console.log(data);
      })
  }
  else {
    // Clear profile
    ui.clearProfile();
  }
});