import 'whatwg-fetch'
import loggerService from 'logger'

let notAuthorizedCounter = 0;
let fetchComponent = {
    fetch: (url, method, header, body) => {
        if (!header) {
            header = {}
        }

        return fetchComponent[method.toLowerCase()](url, header, body).catch(function(exception) {
            loggerService.log('fetchComponent failed:', exception);

            // token过期，重新获取token并发起请求
            if (exception.code === '401' || exception.code === '403') {
                notAuthorizedCounter++;
                // 最多重试3次
                if (notAuthorizedCounter > 2) {
                    notAuthorizedCounter = 0;
                    loggerService.warn("401 or 403 received. Max attemps reached.");
                    return;
                } else {
                    return fetchComponent.fetch(url, method, header, body);
                }
            }
        });
    },
    get: (url, header) => {
        return fetch(url, {
            method: 'GET',
            headers: header
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        });
    },
    getpath:(url, params) => {
        if (params) {
          let paramsArray = [];
          //拼接参数
          Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
          if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
          } else {
            url += '&' + paramsArray.join('&')
          }
        }
        return fetch(url,{
            method: 'GET'
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
    },
    post: (url, header, body) => {
        header['Content-Type'] = 'application/json';
        return fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(body)
        }).then((response) => {
          if (response.ok) {
            return response.json();
          }
        });
    }
};
export default fetchComponent;