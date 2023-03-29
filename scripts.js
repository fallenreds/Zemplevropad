
function get_image_tag(item, prefix=''){
    const imgElement = document.createElement('img');
    imgElement.src = prefix+item.img
    return imgElement
}


async function getJsonData(src){
    const response = await fetch(src);
    return await response.json();
}

function createElement(tag, className=null){
    const divElement = document.createElement(tag);
    if (className){
        divElement.classList.add(className)
    }
    return divElement
}

async function get_services(){
    const parentElement = document.querySelector("#services_container");
    let data = await getJsonData('./services.json')



    const divElements = data.map(item => {

        let divElement = createElement('div', 'servis')
        let spanElement = createElement('span')
        spanElement.textContent = item.label;
        divElement.appendChild(spanElement)
        if(item.img){
            let imgElement = get_image_tag(item, "imgs/")
            divElement.appendChild(imgElement)
        }

        return divElement;
        })

    parentElement.append(...divElements);
}

document.addEventListener('DOMContentLoaded', function() {
    get_services();
});