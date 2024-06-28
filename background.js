chrome.tabs.onUpdated.addListener((tabId,tab)=>{
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryparameter=tab.url.split("?")[1];     // spliting the url and store video value in the url after ?
        const urlparameters= new URLSearchParams(queryparameter) ; // to manupulate string after ?
        chrome.tab.send(tabId,{
            type:"NEW",
            videoId: urlparameters.get("v"),
            
        });
    }
})