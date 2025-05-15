//create the tooltip div
const tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

//fetch the Word Definition on selecting word
document.addEventListener('dblclick', fetchMeaning);
    
async function fetchMeaning(event) {
    const selectedWord = document.getSelection().toString().trim();
    const dictionary_url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    if(selectedWord.length > 0 && /^[a-zA-Z]+$/.test(selectedWord)){

        try {
            const response = await fetch(dictionary_url + selectedWord);
            if(!response.ok){
                console.log('No meaning found');
                tooltip.innerText = `${selectedWord} is not a valid word. No meaning found!`;
            } else{
                const data = await response.json();
                console.log(data[0]?.meanings[0]?.definitions[0]);
                const meaning = data[0]?.meanings[0]?.definitions[0]?.definition;

                tooltip.innerText = `"${selectedWord}" : ${meaning}`;
            }
            tooltip.style.display = 'block';
            tooltip.style.top = `${event.clientY + 15}px`;
            tooltip.style.left = `${event.clientX + 5}px`;
            
        } catch (error) {
            console.log(error);
        }
    }
}

document.addEventListener('click', () =>{
    tooltip.style.display = 'none';
})
