var n=prompt("enter the limit");
for (var i = 1; i <= n; i++) {
    var count = 0;
   for (var j = 2; j < i; j++)
   {
        if (i % j == 0)
        {
            count = 1;
            break;
        }
   }

  if (i > 1 && count== 0)
   {
        console.log(i);
   }
}
