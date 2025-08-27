function getElement(id) {
    const getId = document.getElementById(id);
    return getId;
}

document.getElementById('cards-container').addEventListener('click', function (e) {
    // call button functionalities
    if (e.target.className.includes('call-btn')) {
        const callBtn =e.target;

        // get navbar items inner text
        const navCoins =Number(getElement('nav-coins').innerText)

        // get service title and number
        const emergencyServiceTitleBangla = callBtn.parentNode.parentNode.children[1].children[0].innerText
        const ServiceTitleEnglish = callBtn.parentNode.parentNode.children[1].children[1].innerText
        const emergencyServiceNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText

        // coin balance check and calling
        if(navCoins <= 0){
            alert("⚠️ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টা কয়েন লাগবে।");
            return;
        }
        else if(navCoins){
            alert(`📞 Calling ${ServiceTitleEnglish} ${emergencyServiceNumber}...`)
            const availableCoins = navCoins - 20;
            getElement('nav-coins').innerText = availableCoins;
        }


        // call history
        const callHistory = getElement('call-history')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-[#FAFAFA] p-2 rounded-lg flex justify-between items-center my-2">
                    <div>
                        <h1 class="font-semibold mb-1">${emergencyServiceTitleBangla}</h1>
                        <p class="text-[#5C5C5C]">${emergencyServiceNumber}</p>
                    </div>
                    <div>${new Date().toLocaleTimeString()}</div>
                </div>
        `
        callHistory.appendChild(div)

    }

    // heart icon functionalities
    if(e.target.className.includes('heart-icon')){
         const navFavoriteItems = Number(getElement('nav-favorite-items').innerText);
         const navFavoriteItemsNewValue = navFavoriteItems + 1;
         getElement('nav-favorite-items').innerText = navFavoriteItemsNewValue
    }

    // copy items functionalities
    if(e.target.className.includes('copy-btn')){
        const copyBtn = e.target;
        const emergencyServiceNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText;

        const navCopyItems = Number(getElement('nav-copy-items').innerText);
        const navCopyItemsNewValue = navCopyItems + 1;
        getElement('nav-copy-items').innerText = navCopyItemsNewValue;
        
        navigator.clipboard.writeText(emergencyServiceNumber);
        alert(`নম্বর কপি হয়েছে: ${emergencyServiceNumber}`);
    }


})


// clear call history
getElement('clear-btn').addEventListener('click', function(){
    getElement('call-history').innerHTML = ""
})