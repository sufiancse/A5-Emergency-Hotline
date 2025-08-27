function getElement(id) {
    const getId = document.getElementById(id);
    return getId;
}

document.getElementById('cards-container').addEventListener('click', function (e) {
    if (e.target.className.includes('call-btn')) {
        const callBtn =e.target;

        // get navbar items inner text
        const navFavoriteItems = Number(getElement('nav-favorite-items').innerText);
        const navCoins =Number(getElement('nav-coins').innerText)
        const navCopyItems = Number(getElement('nav-copy-items'))

        // coin balance check and calling
        if(navCoins <= 0){
            alert('taka nai')
            return
        }
        else if(navCoins){
            alert('calling')
            const availableCoins = navCoins - 20;
            getElement('nav-coins').innerText = availableCoins;
        }

        // call history
        const callHistory = getElement('call-history')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-[#FAFAFA] p-2 rounded-lg flex justify-between items-center my-2">
                    <div>
                        <h1 class="font-semibold mb-1">জাতীয় জরুরি সেবা</h1>
                        <p class="text-[#5C5C5C]">999</p>
                    </div>
                    <div>11:35:24 AM</div>
                </div>
        `
        callHistory.appendChild(div)

    }
})


// clear call history
getElement('clear-btn').addEventListener('click', function(){
    getElement('call-history').innerHTML = ""
})