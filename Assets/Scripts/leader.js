#pragma strict
var scores : int[]= [0,0,0,0];


function Start () {
           for(var i=0; i <3 ; i++){
            scores[i]= PlayerPrefs.GetInt("Top"+(i+1));          
           }
           
           scores[3]= PlayerPrefs.GetInt("score");
           
           
           var temp: int;
           for(var j=0; j < scores.Length;j++){
              for(var k=0;k < scores.Length;k++){
                  if(scores[j]>scores[k]){
                    temp =scores[j];
                    scores[j]=scores[k];
                    scores[k]=temp;
                  } 
             }
           }

       PlayerPrefs.SetInt("Top1",scores[0]);
       PlayerPrefs.SetInt("Top2",scores[1]);
       PlayerPrefs.SetInt("Top3",scores[2]);
       

       
       GameObject.Find("no1score").GetComponent(Text).text = scores[0].ToString();
       GameObject.Find("no2score").GetComponent(Text).text = scores[1].ToString();
       GameObject.Find("no3score").GetComponent(Text).text = scores[2].ToString();
       
       
//       transform.Find("no1Img").Find("no1text").GetComponent(Text).text = scores[0].ToString();
//       transform.Find("no2Img").Find("no2text").GetComponent(Text).text = scores[1].ToString();
//       transform.Find("no3Img").Find("no3text").GetComponent(Text).text = scores[2].ToString();

}

