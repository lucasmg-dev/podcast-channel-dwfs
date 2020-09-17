const btnNewPodcast = document.querySelector("#newPodcast")
const podcastList = document.querySelector(".podcast")

btnNewPodcast.addEventListener('click', () => {
    const divPodcast = document.createElement('div')
    divPodcast.classList.add("podcast-child")
    const iframe = document.createElement('iframe')
    iframe.src = prompt("Ingrese la url del podcast")
    iframe.classList.add("iframe")
    divPodcast.appendChild(iframe)
    podcastList.appendChild(divPodcast)
})