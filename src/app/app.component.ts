import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean =false;
  showImages:boolean = true;
  showButton:boolean=false;
  fruits=['Apple', 'Orange', 'Banana', 'Pomegranate', "Grapes", "Kiwi"];
  imagePath=["https://i.redd.it/ivgdo8pv8m511.png", "http://images6.fanpop.com/image/photos/35300000/Oranges-oranges-35302562-472-310.jpg",
"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/7/6/3/6/866367-1-eng-GB/KSA-s-HAQ-starts-new-banana-contract_wrbm_large.jpg",
"http://www.allwhitebackground.com/images/3/3826.jpg", "https://res.cloudinary.com/lush/image/upload/v1/ingredients/main/338.jpg?itok=bmG0kqNF",
"https://sunpacific.com/wp-content/uploads/2016/02/kiwi.png"]
description=["Apples are extremely rich in important antioxidants, flavanoids, and dietary fiber. The phytonutrients and antioxidants in apples may help reduce the risk of developing cancer, hypertension, diabetes, and heart disease.",
"Oranges are low in calories and full of nutrients, they promote clear, healthy, skin and can help to lower our risk for many diseases as part of an overall healthy and varied diet.",
"Bananas are extremely healthy and delicious.They contain several essential nutrients and provide benefits for digestion, heart health and weight loss. Aside from being very nutritious, they are also a highly convenient snack food.",
"The pomegranate is a fruit that contains hundreds of edible seeds called arils. They are rich in fiber, vitamins, minerals and bioactive plant compounds, but they also contain some sugar.",
"Grapes contain many important vitamins and minerals, including more than one-quarter of the RDIs for vitamins C and K.",
"Kiwi is loaded with innumerable health benefits. The vibrant green coloured slices of the fruit is a wonder fruit. It helps in digestion, manage blood pressure, provides protection from DNA damage, boosts immunity strength, supports weight loss, improves digestive health , helps to clear out toxins, helps to battle against diseases, beneficial for diabetes patients, protects against macular degeneration, creates alkaline balance ,prevents constipation, reduction in formation of kidney stones, acts as sleep inducer, eliminates free radicals, helps in maintaining blood pressure, beneficial for pregnant woman."]
  title = 'MyFirstAngularProject';
  ChangeContent(){
    this.show=!this.show;
    console.log("i m clicked");  
}

hideImages(event){
this.showImages=!this.showImages;
if(event.srcElement.childNodes[0].textContent === 'Hide Images' ){
  event.srcElement.childNodes[0].textContent="Show Images";
}
else{
  event.srcElement.childNodes[0].textContent="Hide Images";
}
}
}
