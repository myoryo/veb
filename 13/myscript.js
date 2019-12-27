function multipleee()
{
    document.f3.elements[1].value='';
    for(var i=0;i<6;i++) 
    {
    if(document.f3.elements[0].options[i].selected==true)
    {
    document.f3.elements[1].value = document.f3.elements[1].value+i;
    break;
    }
    }
}