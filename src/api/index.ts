import { objectString } from '../helpers'

const headers = (token: string, multipart?: boolean) => {
    let data : any = {
        'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
    }
    if (token) {
        data = {
            'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
            'authorization': `bearer ${token}`
        }
    }
    
    return data
}

export const requestPost = (data: any, url: string, token: string) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: headers(token),
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        });
    })
}

export const requestPostMultipart = (data: any, url: string, token: string) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: headers(token, true),
            body: data
        })
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        });
    })
}

export const requestGet = (data: any, url: string, token: string) => {
    return new Promise((resolve, reject) => {
        fetch(`${url}${objectString(data)}`, {
            method: 'GET',
            headers: headers(token, false)
        })
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch((error) => {
            reject(error)
        });
    })
}