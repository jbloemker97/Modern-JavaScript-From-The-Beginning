class GitHub {
    constructor() {
        this.client_id = "8783ff135e98572c25f0";
        this.client_secret = "63bb39e3c5ed6082f08a947d2f5543b5a8f67742";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
    }
}