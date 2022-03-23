import ajaxService from "./ajaxService";

const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault(); //keisti standartine formos elgsena.
        const searchTerm = document.querySelector('.term').value;
        console.log(searchTerm)
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse = result)
            .then(()=>console.log('Pašto kodas:', searchResponse.data[0].post_code))
            .then(()=>{
                document.querySelector('.result').value = searchResponse.data[0].post_code;
            })
    })
}

export default searchCode