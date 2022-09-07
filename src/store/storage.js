const ACCOUNT_KEY = 'ACCOUNT_KEY'
const storage = {
    get() {
        return JSON.parse(localStorage.getItem(ACCOUNT_KEY)) || []
    },
    set(user) {
        localStorage.setItem(ACCOUNT_KEY, JSON.stringify(user))
    },
}
export default storage
