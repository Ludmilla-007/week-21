function onSearch(){
    let image = document.getElementById("imageSearch").value;
fetch("https://api.giphy.com/v1/gifs?api_key=KFpu7a6NOMi7vsZI7dj8qjOLatLTTL8i "+ image)  

      .then(response => response.json())
			.then(image => 
                {document.getElementById("avatar").src=user.avatar_url;
               })
      .catch(err => console.log(err));
    }