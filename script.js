const cookieBox = document.querySelector(".wrapper"),
 buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("minie24")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");
            if (button.id == "acceptBtn") {
                document.cookie = "cookieBy= minie24; max-age=" + 60 * 60 * 24 *30;
            }
        });
    });
};


window.addEventListener("load", executeCodes);