(function() {

    document.addEventListener('DOMContentLoaded', _init);

    function _init() {
        _addPageEvents();
    }

    function _addPageEvents() {
        document.getElementById('loginform').addEventListener('submit', _loginFormSubmitted);
    }

    function _loginFormSubmitted(e) {
        e.preventDefault();
        e.stopPropagation();

        var username = this['username'].value;
        var password = this['password'].value;

        if (!username || !password) {
            alert('Formulario incompleto');
            return;
        }

        fetch('/backend/backend.php', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
        })
        .then(res => res.json())
        .then(data => {
            _checkLoginResponse(data);
        });
    }

    function _checkLoginResponse(data) {
        if (!data || !data.length) {
            alert('Error en inicio de sesión');
        } else {
            alert('Sesión iniciada correctamente');
        }
    }

}());