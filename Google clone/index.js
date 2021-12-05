const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown" , function(event){
    if(event.code === "Enter"){
      search();
    }
})
function search(){
     const input = searchInput.value;

     window.location.href = "https://www.google.co.in/search?q=" + input + "&sxsrf=AOaemvLwqrFp_BubkpGbTtYLvLVhHbYqCg%3A1637388706434&source=hp&ei=opGYYcWUGOzK1sQPiM66-AE&iflsig=ALs-wAMAAAAAYZifsv2ZhTuQHPvc5WISgxalR8YnkI4B&ved=0ahUKEwjF7dChpKb0AhVspZUCHQinDh8Q4dUDCAc&uact=5&oq="+input+"&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCAguEIAEELEDMggILhCxAxCDATIFCAAQgAQyCAguELEDEIMBMgUILhCABDIICAAQgAQQsQMyCAgAELEDEIMBOgcILhDqAhAnOgcIIxDqAhAnOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCUMcFWPgPYKITaAFwAHgAgAGMCogBnguSAQcwLjEuNy0xmAEAoAEBsAEK&sclient=gws-wiz";
}