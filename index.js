function theBeatlesPlay(musicians,instruments)
{ 
  let arr = [];
  let str = "";
  
  for(let i = 0;i<musicians.lenght;i++)
  {
    str = musicians[i] + " plays "+ instruments[i];
    arr[i]= str;
  }
  return musicians.lenght;
}

function johnLennonFacts(facts)
{
  let arr = facts;
  let fact = "";
  let i = 0;
  while(i<=facts.lenght)
  {
    fact= facts + "!!!";
    arr[i]=fact;
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num)
{
  let emptyArray = [];
  let i = 0;
  do 
  {
    emptyArray[i]="I love the Beatles!" ;
    i++;
    num++;
  }while(i<15)
  return emptyArray;
}