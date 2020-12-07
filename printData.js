const cl = console.log


//1°  titres albums
// let starArray = [].map.call(starUnChecked, function(el) {
//     return el;
// })
    //   let albumArray = ['']
    //   albumArray.push(`${d.album.title}`)
    //       cl(albumArray)  

    // cl(Object.values(d.album))

    // var r = [];
// r['machin'] = "truc muche";
// r['bidule'] = 3.14;
// cl(r)

// var first = {};
// for(key in data){
//     if(data.hasOwnProperty(key)){
//         first.key = key;
//         first.content =  data[key];

//         break;

//     }
// }


var c1Album = document.querySelector('.title1')
var c2Album = document.querySelector('.title2')
var c3Album = document.querySelector('.title3')
var c4Album = document.querySelector('.title4')
var c5Album = document.querySelector('.title5')
var c6Album = document.querySelector('.title6')
var c7Album = document.querySelector('.title7')
var c8Album = document.querySelector('.title8')
var c9Album = document.querySelector('.title9')
var c10Album = document.querySelector('.title10')
var c11Album = document.querySelector('.title11')
var c12Album = document.querySelector('.title12')
var c13Album = document.querySelector('.title13')
var c14Album = document.querySelector('.title14')


var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")
var img3 = document.querySelector("#img3")
var img4 = document.querySelector("#img4")
var img5 = document.querySelector("#img5")
var img6 = document.querySelector("#img6")
var img7 = document.querySelector("#img7")
var img8 = document.querySelector("#img8")
var img9 = document.querySelector("#img9")
var img10 = document.querySelector("#img10")
var img11= document.querySelector("#img11")
var img12= document.querySelector("#img12")
var img13= document.querySelector("#img13")
var img14= document.querySelector("#img14")

var track1 = document.querySelector("#track1")
var track2 = document.querySelector("#track2")
var track3 = document.querySelector("#track3")
var track4 = document.querySelector("#track4")
var track5 = document.querySelector("#track5")
var track6 = document.querySelector("#track6")
var track7 = document.querySelector("#track7")
var track8 = document.querySelector("#track8")
var track9 = document.querySelector("#track9")
var track10 = document.querySelector("#track10")
var track11= document.querySelector("#track11")
var track12= document.querySelector("#track12")
var track13= document.querySelector("#track13")
var track14= document.querySelector("#track14")

var play1 = document.querySelector("#play1")
var play2 = document.querySelector("#play2")
var play3 = document.querySelector("#play3")
var play4 = document.querySelector("#play4")
var play5 = document.querySelector("#play5")
var play6 = document.querySelector("#play6")
var play7 = document.querySelector("#play7")
var play8 = document.querySelector("#play8")
var play9 = document.querySelector("#play9")
var play10 = document.querySelector("#play10")
var play11= document.querySelector("#play11")
var play12= document.querySelector("#play12")
var play13= document.querySelector("#play13")
var play14= document.querySelector("#play14")


// var listUl = document.querySelector('#list-albums');
// let albumArray = [] 
// var listeAlbums = () =>
// {
//     data.forEach((d)=>
//         {       
//     //   albumArray.push(`${d.album.title}`)
//             // let result = albumArray.filter(albumArray=> albumArray);   
//          listUl.insertAdjacentHTML('beforeend', `<li>${d.album.title}</li>`)   
//         //  listUl.insertAdjacentHTML('beforeend', `<div>${d.album.id}</div>`) 
      
//     })  
// }

// listeAlbums()


var card1 = () =>
{
    data.forEach((d)=>
    {  
        if(d.album.id == 125748)
        {  
        var r = d.album.title
            c1Album.innerHTML= r    
        var imgAlbum = d.album.cover_medium
            img1.src = imgAlbum
        var trackAlbum = d.album.tracklist
        track1.href= trackAlbum
        var playPreview = d.preview
        play1.href= playPreview
            
        }        
})  }

var card2 = () =>
{
    data.forEach((d)=>
    {  
        if(d.album.id == 103248)
        {  
        var r = d.album.title
            c2Album.innerHTML= r  
         var imgAlbum = d.album.cover_medium
            img2.src = imgAlbum  
        var trackAlbum = d.album.tracklist
            track2.href= trackAlbum
        var playPreview = d.preview
            play2.href= playPreview
        }        
})  }

var card3 = () =>
{
    data.forEach((d)=>
    {  
        if(d.album.id == 162035)
        {  
        var r = d.album.title
            c3Album.innerHTML= r   
         var imgAlbum = d.album.cover_medium
            img3.src = imgAlbum
        var trackAlbum = d.album.tracklist
            track3.href= trackAlbum
        var playPreview = d.preview
        play3.href= playPreview
        }        
})  }

var card4 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 224774)
        {  
        var r = d.album.title
            c4Album.innerHTML= r 
        var imgAlbum = d.album.cover_medium
            img4.src = imgAlbum 
         var trackAlbum = d.album.tracklist
        track4.href= trackAlbum
        var playPreview = d.preview
        play4.href= playPreview
          
        }        
})  }

var card5 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 350198)
        {  
        var r = d.album.title
            c5Album.innerHTML= r  
         var imgAlbum = d.album.cover_medium
            img5.src = imgAlbum
        var trackAlbum = d.album.tracklist
            track5.href= trackAlbum 
        var playPreview = d.preview
        play5.href= playPreview
        }        
})  }

var card6 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 119606)
        {  
        var r = d.album.title
            c6Album.innerHTML= r  
         var imgAlbum = d.album.cover_medium
            img6.src = imgAlbum 
        var trackAlbum = d.album.tracklist
        track6.href= trackAlbum
        var playPreview = d.preview
        play6.href= playPreview
        }        
})  }

var card7 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 161523)
        {  
        var r = d.album.title
            c7Album.innerHTML= r 
         var imgAlbum = d.album.cover_medium
            img7.src = imgAlbum  
         var trackAlbum = d.album.tracklist
        track7.href= trackAlbum
        var playPreview = d.preview
        play7.href= playPreview
        }        
})  }

var card8 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 400170)
        {  
        var r = d.album.title
            c8Album.innerHTML= r  
        var imgAlbum = d.album.cover_medium
            img8.src = imgAlbum 
        var trackAlbum = d.album.tracklist
        track8.href= trackAlbum
        var playPreview = d.preview
        play8.href= playPreview
        }        
})  }
var card9 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 595243)
        {  
        var r = d.album.title
            c9Album.innerHTML= r  
         var imgAlbum = d.album.cover_medium
            img9.src = imgAlbum 
        var trackAlbum = d.album.tracklist
        track9.href= trackAlbum
        var playPreview = d.preview
        play9.href= playPreview
        }        
})  }

var card10 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 7090505)
        {  
        var r = d.album.title
            c10Album.innerHTML= r  
        var imgAlbum = d.album.cover_medium
            img10.src = imgAlbum
        var trackAlbum = d.album.tracklist
        track10.href= trackAlbum 
        var playPreview = d.preview
        play10.href= playPreview
        }        
})  }


var card11 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 53227232)
        {  
        var r = d.album.title
            c11Album.innerHTML= r  
         var imgAlbum = d.album.cover_medium
            img11.src = imgAlbum 
         var trackAlbum = d.album.tracklist
        track11.href= trackAlbum
        var playPreview = d.preview
        play11.href= playPreview
        }        
})  }


var card12 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 72000342 )
        {  
        var r = d.album.title
            c12Album.innerHTML= r   
         var imgAlbum = d.album.cover_medium
            img12.src = imgAlbum
        var trackAlbum = d.album.tracklist
        track12.href= trackAlbum
        var playPreview = d.preview
        play12.href= playPreview
        }        
})  }


var card13 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 73435562 )
        {  
        var r = d.album.title
            c13Album.innerHTML= r 
         var imgAlbum = d.album.cover_medium
            img13.src = imgAlbum 
        var trackAlbum = d.album.tracklist
        track13.href= trackAlbum 
        var playPreview = d.preview
        play13.href= playPreview
        }        
})  }


var card14 = () =>
{
    data.forEach((d) =>
    {  
        if(d.album.id == 127270232)
        {  
        var r = d.album.title
            c14Album.innerHTML= r   
         var imgAlbum = d.album.cover_medium
            img14.src = imgAlbum
         var trackAlbum = d.album.tracklist
        track14.href= trackAlbum
        var playPreview = d.preview
        play14.href= playPreview
        }        
})  }


var getData = () =>
{
    card1()
    card2()
    card3()
    card4()
    card5()
    card6()
    card7()
    card8()
    card9()
    card10()
    card11()
    card12()
    card13()
    card14()
}

getData()