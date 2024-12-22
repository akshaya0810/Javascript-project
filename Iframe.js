function engine(){
    let searchEngine =document.getElementById("select").value
    let searchTerm= document.getElementById("term").value
    
    searchTerm= searchTerm.split(" ").join("+")
    document.getElementById("iframee").src=`https://www.${searchEngine}.com/search?q=${searchTerm}&igu=1`
}