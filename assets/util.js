export const setCookie = (key, value) => {
    if (key) {
        const exp = new Date()
        exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000)
        document.cookie = key + '=' + value + ';expires=' + exp.toGMTString() + ';domain=.mi.com; path=/'
    }
}
export const getCookie = (key) => {
    if (key) {
        const strcookie = document.cookie
        const arrcookir = strcookie.split(';')
        for (let i = 0; i < arrcookir.length; i++) {
            let arrItem = arrcookie[i].split('=')
            if (arrItem[0] === key) {
                let value = arrItem[1]
                if (arrItem.length > 2) {
                    arrItem.splice(0, 1)
                    value = arrItem.join('=')
                }
                return value
            }
        }
        return ''
    }
}
export const clearCookie = (key, value) => {
    if (key) {
        const exp = new Date()
        exp.setTime(exp.getTime() - 10000)
        document.cookie = key + '=' + value + ';expires=' + exp.toGMTString() + ';domain=.mi.com; path=/'
    }
}

export const getQueryParam = (key) => {
    let url = location.href
    var params = {}
    if (url.length > 0) {
        url.substring(1).split('&').forEach((item) => {
            let args = item.split('=')
            params[args[0]] = args.slice(1) === '' ? null : encodeURIComponent(args.slice(1).join('='))
        })
        if (params[key]) return params[key]
        return null
    } else {
        return null
    }
}
/**
 * 生成唯一随机码
 */
export const randTrace = () => {
    // 2subshniah0
    return Number(Math.random().toString().substring(3,8) + Date.now())
}
/**
 * 生成唯一code值
 */
export const randCodeId = () => {
    return Number(Math.random().toString().substring(3,8) + Date.now()).toString(36) + Date.now()
}
/**
 * 生成某个范围内的随机数
 * @param {*} min 
 * @param {*} max 
 */
export const random = (min, max) => {
    return Math.floor(Math.random() * (max -min))
}
export const deepCopy = (obj) => {
    if (typeof obj !== 'object') {
        return obj
    }
    let newObj = {}
    for (let p in obj) {
        newObj[p] = deepCopy(obj[p])
    }
    return newObj
}
