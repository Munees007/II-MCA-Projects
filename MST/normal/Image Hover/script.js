"use strict";
const mouseDivRef = document.getElementById("mouseDiv");
const createMouseDiv = () => {
    const div = document.createElement("div");
    div.style.backgroundImage = 'url(images/1.png)';
    const changeBackgroundImage = (imageName) => {
        div.style.backgroundImage = `url(images/${imageName})`;
    };
    div.className = "w-96 h-96 bg-no-repeat bg-contain ";
    div.addEventListener("mousedown", e => changeBackgroundImage('2.png'));
    div.addEventListener("mouseenter", e => changeBackgroundImage('3.png'));
    div.addEventListener("mouseleave", e => changeBackgroundImage('4.png'));
    mouseDivRef.replaceChildren(div);
};
const createRadioDiv = () => {
    const Imagediv = document.createElement("div");
    const radioDiv = document.createElement("div");
    const images = ["1.png", "2.png", "3.png", "4.png",
        "5.png", "6.png", "7.png", "8.png"];
    Imagediv.style.backgroundImage = 'url(images/1.png)';
    const changeBackgroundImage = (imageName) => {
        Imagediv.style.backgroundImage = `url(images/${imageName})`;
    };
    Imagediv.className = "w-96 h-96 bg-no-repeat bg-contain ";
    images.forEach((value, index) => {
        const groupDiv = document.createElement("div");
        const radioButton = document.createElement("input");
        const label = document.createElement("p");
        groupDiv.className = "flex gap-2";
        label.innerText = value;
        label.className = "font-bold";
        radioButton.type = "radio";
        radioButton.name = "radioAction";
        radioButton.addEventListener('click', (e) => {
            changeBackgroundImage(value);
        });
        groupDiv.appendChild(radioButton);
        groupDiv.appendChild(label);
        radioDiv.appendChild(groupDiv);
    });
    radioDiv.className = "flex gap-3 items-center";
    mouseDivRef.className = "flex gap-3 items-center flex-col";
    mouseDivRef.replaceChildren(Imagediv);
    mouseDivRef.appendChild(radioDiv);
};
document.addEventListener('DOMContentLoaded', e => createMouseDiv());
