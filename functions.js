function git(x,image)
{
    if (x==1)
        {
            image.src= 'Github_active.png';
        }
    if (x==2)
        {
            image.src = "Github_unactive.png"
        }
}

function linkden(x,image)
{
    if (x==1)
        {
            image.src = "linked_active.png";
        }
   
        if (x==2)
        {
            image.src="linked_unactive.png";
        }
}

function blob(all,img)
{
    var toHide = document.getElementsByClassName(all);
    var toShow = document.getElementsByClassName(img);

    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.opacity = 0;
    }

    for (var j = 0; j < toShow.length; j++) {
        toShow[j].style.opacity = 1;
    }

    return;
}