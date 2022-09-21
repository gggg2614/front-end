var a = {}

Object.defineProperty(a, 'as', {
    get() {
        return 1
    },
    set(value) {
        value = value
    }
})
