/*************************************************
 * Please type in the image folder
*************************************************/
var imageFolder = './_img';

/*************************************************
 * Please type in the image names to the list, with file extension
*************************************************/
var imageList = [   'ali-yahya-1402711-unsplash.jpg',
                    'cristian-lozan-1403649-unsplash.jpg',
                    'david-ngo-1404606-unsplash.jpg',
                    'eberhard-grossgasteiger-1128663-unsplash.jpg',
                    'jericho-cervantes-1404858-unsplash.jpg',
                    'kerem-suer-1406788-unsplash.jpg',
                    'marco-bicca-1405669-unsplash.jpg',
                    'mohamed-nashah-1403344-unsplash.jpg',
                    'olaf-wisser-1404241-unsplash.jpg'
                ];
/*************************************************/     

$(document).ready(function(){
    // Create img tag and add photos from list
        $.each(imageList, function(i) {
            $('<img />')
            .attr('src', imageFolder+'/'+imageList[i])
            .addClass('img-thumbnail')
            .appendTo('#gallery-img')
            .wrap('<a href="' + imageFolder + '/' + imageList[i] + '" title="Image By: ' + imageList[i] + '" class="[ gallery-slide-image ]"> </a>')
        });

        // Show the first image
        $('#gallery-img .gallery-slide-image').first().addClass('active');
        
        // On click right show next photo
        $('#right-arrow').click(function() {
            var currentImage = $('.gallery-slide-image.active');
            var nextImage = currentImage.next();  
            currentImage.fadeOut(550).removeClass('active');
            nextImage.fadeIn(550).addClass('active');

            // If it is the last image, set the first to active
            if(nextImage.length == 0) {
                $('a.gallery-slide-image').first().fadeIn(550).addClass('active');
            }
        })

        // On click left show previous photo
        $('#left-arrow').click(function() {
            var currentImage = $('.gallery-slide-image.active');
            var prevImage = currentImage.prev();
            currentImage.fadeOut(550).removeClass('active');
            prevImage.fadeIn(550).addClass('active');

            // if its the first image, set the last to active
            if(prevImage.length == 0) {
                $('a.gallery-slide-image').last().fadeIn(550).addClass('active');
            }
        })
});