export function ajaxPost (url, data, success, error, token = null) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            success(JSON.parse(this.response));
        } else {
            // We reached our target server, but it returned an error
            error(this);
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        error();
    };

    request.setRequestHeader('Content-Type', 'application/json');

    if(token)
        request.setRequestHeader('Authorization', 'Bearer ' + token);

    request.send(JSON.stringify(data));
}

export function ajaxPut (url, data, success, error, token = null) {
    var request = new XMLHttpRequest();
    request.open('PUT', url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            success(JSON.parse(this.response));
        } else {
            // We reached our target server, but it returned an error
            error(this.status);
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        error();
    };

    request.setRequestHeader('Content-Type', 'application/json');

    if(token)
        request.setRequestHeader('Authorization', 'Bearer ' + token);

    request.send(JSON.stringify(data));
}

export function ajaxGet (url, success, error, token = null, vObj = undefined) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            success(JSON.parse(this.response));
        } else {
            // We reached our target server, but it returned an error
            console.log(this.status, this.vObj);
              if(this.status == "401" && vObj != undefined) {
            console.log("B");
                vObj.$emit('logout');
                vObj.$router.push('/');
              }
            error(this.status, {status:this.status, error: this.error, res:this.response});
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        error();
    };

    request.setRequestHeader('Content-Type', 'application/json');

    if(token)
        request.setRequestHeader('Authorization', 'Bearer ' + token);
    
    request.send();
}

export function ajaxDelete (url, success, error, token = null) {
    var request = new XMLHttpRequest();
    request.open('DELETE', url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            success(JSON.parse(this.response));
        } else {
            // We reached our target server, but it returned an error
            error(this.status);
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        error();
    };

    request.setRequestHeader('Content-Type', 'application/json');

    if(token)
        request.setRequestHeader('Authorization', 'Bearer ' + token);
    
    request.send();
}