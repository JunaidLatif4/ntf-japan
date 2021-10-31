import axios from "../axiosInstance"

const getAboutData = async () => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        let res = await axios({
            url: "api/about/",
            method: "GET"
        })

        resolved.data = res.data
    } catch (err) {
        if (err.response.data.msg) {
            resolved.error = err.response.data.msg
        } else {
            resolved.error = "Somthing Went Wrong"
        }
    }

    return resolved
}

const editAboutData = async (path, content) => {
    let resolved = {
        data: null,
        error: null
    }

    try {
        let res = await axios({
            url: "api/about/",
            method: "POST",
            data: {
                path: path,
                content: content.trim()
            }
        })

        resolved.data = res.data
    } catch (err) {
        if (err.response.data.msg) {
            resolved.error = err.response.data.msg
        } else {
            resolved.error = "Somthing Went Wrong"
        }
    }

    return resolved
}

export { getAboutData, editAboutData }