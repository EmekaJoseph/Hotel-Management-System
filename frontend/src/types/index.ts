interface LoginFormInterface {
    username: string,
    password: string,
    err: {
        msg: string,
        username: boolean
        password: boolean
    }
}

interface example {
    name: string
}


export { LoginFormInterface, example }