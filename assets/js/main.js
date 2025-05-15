//create the tooltip div
const tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

//tooltip styles
const tStyle = tooltip.style;
tStyle.display = 'none';
tStyle.width = '200px';
tStyle.fontSize = '0.9rem';
tStyle.padding = '8px';
tStyle.position = 'absolute';
tStyle.backgroundColor = '#020618';
tStyle.color = 'white';
tStyle.boxShadow = '0px 0px 5px 2px #02061880';

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

                tooltip.innerText = `${selectedWord} definition: ${meaning}`;
            }
            tooltip.style.display = 'block';
            tooltip.style.top = `${event.pageX}px`;
            tooltip.style.left = `${event.pageY}px`;
            
        } catch (error) {
            console.log(error);
        }
    }
}

document.addEventListener('click', () =>{
    tooltip.style.display = 'none';
})
