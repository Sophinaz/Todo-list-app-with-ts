const btn = document.querySelector('.btn') as HTMLElement;
const input = document.querySelector('.add') as HTMLInputElement;
const contain = document.querySelector('.list') as HTMLElement;
const line = document.querySelector('h2') as HTMLElement;

btn?.addEventListener("click", () => {
    if (input?.value) {        
        const newtask:HTMLElement = document.createElement('div')
        newtask.innerHTML = `
            <h2> ${input.value} </h2>
            <div class="inner">
            <h3> Edit </h3>
            <button> Delete </button>
            </div>
        `
        newtask.classList.add("outer")
        contain?.appendChild(newtask)
        input.value = ""
    }
    else{
        alert("please insert a task")
    }
})

contain?.addEventListener("click", (e) => {
    if (e.target){
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON'){
            (target.parentElement?.parentElement as HTMLElement).remove();
        }
        else if (target.tagName === 'H3'){
            const edittask = prompt('Enter new task:')
            const tex = target.parentElement?.parentElement
            if (tex){
                tex.children[0].textContent = edittask
            }
    }}
})