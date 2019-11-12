(function() {

    var data = null;

    document.addEventListener('DOMContentLoaded', _init);

    function _init() {
        _addPageEvents();
        _inititalizeData();
        _updatesView();
    }

    function _addPageEvents() {
        document.getElementById('loginform').addEventListener('submit', _loginFormSubmitted);
        document.getElementById('logout').addEventListener('click', function() {
            data.logged = false;
        });
    }

    function _inititalizeData() {
        data = {};
        Object.defineProperty(data, 'logged', {
            set: function(value) {
                localStorage.setItem('logged', value);
                _updatesView();
            },
            get: function() {
                return localStorage.getItem('logged') === 'true';
            }
        })
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
            body: JSON.stringify({username: username, password: password, action: 'login'}),
        })
        .then(res => res.json())
        .then(data => {
            _checkLoginResponse(data);
        });
    }

    function _checkLoginResponse(response) {
        if (!response || !response.length) {
            alert('Error en inicio de sesión');
            data.logged = false;
        } else {
            data.logged = true;
            alert('Sesión iniciada correctamente');
        }
    }

    function _updatesView() {
        var unloggedView = document.getElementById('unloggedView');
        var loggedView = document.getElementById('loggedView');
        if (data.logged) {
            unloggedView.classList.add('hidden');
            loggedView.classList.remove('hidden');
        } else {
            unloggedView.classList.remove('hidden');
            loggedView.classList.add('hidden');
        }
    }

}());