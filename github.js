class Github {
  constructor() {
    this.client_id = '0745784fd327ca68b4d7';
    this.client_secret = 'e8276691fdddb82e9103a1d78e8f75b8c3bc7eee';
    this.repos_count = 5;
    this.repos_sort = 'create: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}