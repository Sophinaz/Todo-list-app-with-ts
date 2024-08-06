"use strict";
const btn = document.querySelector('.btn');
const input = document.querySelector('.add');
const contain = document.querySelector('.list');
const line = document.querySelector('h2');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    if (input === null || input === void 0 ? void 0 : input.value) {
        const newtask = document.createElement('div');
        newtask.innerHTML = `
            <h2> ${input.value} </h2>
            <div class="inner">
            <h3> Edit </h3>
            <button> Delete </button>
            </div>
        `;
        newtask.classList.add("outer");
        contain === null || contain === void 0 ? void 0 : contain.appendChild(newtask);
        input.value = "";
    }
    else {
        alert("please insert a task");
    }
});
contain === null || contain === void 0 ? void 0 : contain.addEventListener("click", (e) => {
    var _a, _b;
    if (e.target) {
        const target = e.target;
        if (target.tagName === 'BUTTON') {
            ((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement).remove();
        }
        else if (target.tagName === 'H3') {
            const edittask = prompt('Enter new task:');
            const tex = (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
            if (tex) {
                tex.children[0].textContent = edittask;
            }
        }
    }
});
