

export async function getLinksSave(key){

    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;

}



export default getLinksSave;


export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);
        
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log("Esse Link já existe na sua Lista!")
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("LINK SALVO COM SUCESSO!")
}


export function deleteLink(links, id){

      let myLinks = links.filter( item => {
          return (item.id !== id)
      })

      localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
      console.log("LINK DELETADO COM SUCESSO")

      return myLinks;
}