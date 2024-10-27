function playRR()
{
   var player = Math.cell(Math.random()*6)
   var weapon = Math.cell(Math.random()*6)
   var bangImage = "bang-Image.jpg";
   var fakebangImage = "fakebang-Image.jpg";
   var weaponImage = "weapon-Image.jpg";
   
   if (player == 1)
   {
        document.getElementById("playerImg").src = fakebangImage;
   }
   else if (player == 2)
    {
        document.getElementById("playerImg").src = fakebangImage;
    }
    else if (player == 3)
    {
         document.getElementById("playerImg").src = fakebangImage;
    }
    else if (player == 4)
    {
         document.getElementById("playerImg").src = fakebangImage;
    }
     else if (player == 5)
    {
         document.getElementById("playerImg").src = fakebangImage;
    }
    else 
    {
         document.getElementById("playerImg").src = fakebangImage;
    }

    if (weapon == 1)
        {
             document.getElementById("weaponImg").src = fakebangImage;
        }
        else if (weapon == 2)
         {
             document.getElementById("weaponImg").src = fakebangImage;
         }
         else if (weapon == 3)
         {
              document.getElementById("weaponImg").src = fakebangImage;
         }
         else if (weapon == 4)
         {
              document.getElementById("weaponImg").src = fakebangImage;
         }
          else if (weapon == 5)
         {
              document.getElementById("weaponImg").src = fakebangImage;
         }
         else 
         {
              document.getElementById("weaponImg").src = fakebangImage;
         }
}

