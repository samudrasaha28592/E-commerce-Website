const icons = document.querySelectorAll(".icon_box");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        icons.forEach(i => i.classList.remove("active"));
        icon.classList.add("active");
    });
});