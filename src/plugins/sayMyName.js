export default {
    install: (app) => {
        app.config.globalProperties.$sayMyName = (name) => {
            alert(name)

        }
    }
}