document.getElementById('page-loaded').innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-check-account').addEventListener('click', checkAccount);

function checkAccount() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = data['client-name'];
            document.getElementById('account-balance').innerHTML = data['account-balance'];
        }
    }
    xhr.open('GET', 'client-data.json?p='+Math.random(), true);
    xhr.send();
}

document.getElementById('btn-get-html').addEventListener('click', getHtml);

function getHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'fragment.html', true);
    xhr.send();
}
