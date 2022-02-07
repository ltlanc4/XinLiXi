const App = (function () {
    function init() {
        document.querySelector("body").addEventListener('mouseover', event => {
            event.preventDefault();
            if (event.target.classList.contains("btn-no")) {
                document.querySelector('#ban-dau').classList.add("d-none");
                document.querySelector('#du-phong').classList.remove("d-none");
            }
            if (event.target.classList.contains("btn-no-du-phong")) {
                document.querySelector('#ban-dau').classList.remove("d-none");
                document.querySelector('#du-phong').classList.add("d-none");
            }
        });
        document.querySelector("body").addEventListener('click', event => {
            event.preventDefault();
            if (event.target.classList.contains("btn-yes") || event.target.classList.contains("btn-yes-du-phong")) {
                document.querySelector(".text-success").classList.remove("d-none");
                document.querySelector("#reset").classList.remove("d-none");
            }
            if (event.target.classList.contains("btn-no")) {
                document.querySelector('#ban-dau').classList.add("d-none");
                document.querySelector('#du-phong').classList.remove("d-none");
            }
            if (event.target.classList.contains("btn-no-du-phong")) {
                document.querySelector('#ban-dau').classList.remove("d-none");
                document.querySelector('#du-phong').classList.add("d-none");
            }
        });
        document.querySelector("body").addEventListener('click', event => {
            event.preventDefault();
            if (event.target.classList.contains("btn-reset")) {
                document.querySelector(".text-success").classList.add("d-none");
                document.querySelector('#ban-dau').classList.remove("d-none");
                document.querySelector('#du-phong').classList.add("d-none");
                document.querySelector("#reset").classList.add("d-none");
            }
        });
    }
    return {
        init,
    };
})();

window.addEventListener("DOMContentLoaded", App.init);