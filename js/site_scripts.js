
        var partnerImg = []; //empty array to store image element
        var partnerNames = []; //empty array to store images filenames
        var partnerList = []; //Empty array to store html list that conatain an image
        var img = []; //empty variable to store assembled image list codes
        var openList = '<li class="partner">'; //Store the open list tag
        var closeList = "</li>"; //store the close list tag
        var photos = [];

        //create a logo to create 6 images starting with index of 0
        //<li class="partner"><img src="images/partners/partner-bustour.png" alt="Partner Bus Tours"></li>

        for (var i=0; i<6; i++){
            partnerNames.push("partner"+(i+1));
            photos.push('<img src="images/partners/'+partnerNames[i]+'.png">');
            img = openList + photos[i] + closeList;
            partnerList.push(img);
        }
        //Display all six images codes, stored images in the array
        document.getElementById("partners").innerHTML = partnerList.join("");

    