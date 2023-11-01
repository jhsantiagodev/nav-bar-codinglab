
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let btnSearch =  document.querySelector(".bx-search");

    btn.onclick = function(){
        sidebar.classList.toggle("active");
    }

    btnSearch.onclick = () => {
        sidebar.classList.toggle("active");
    }


    