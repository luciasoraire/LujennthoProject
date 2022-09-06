const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=> {
    panel.addEventListener("click", ()=> {
        removerClases();
        panel.classList.add("active");
    });
});

const removerClases = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

