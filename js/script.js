//Nav bar thay đổi khi scroll
window.addEventListener("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 150);
        })

// //Nav bar được chọn thay đổi
// const items = document.querySelectorAll("ul li");
// items.forEach(item => {
//     item.addEventListener("click",()=>{
//         document.querySelector("li.active").classList.remove("active");
//         item.classList.add("active");
//     })
// })