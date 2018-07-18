// TEST1

var foodImages = new Array("../images/beef.jpg", "../images/chicken.jpg", "../images/pork.jpg", "../images/seafood.jpg", "../images/veggie.jpg");

// calls the image randomizer function
chooseImage(foodImages);
defaultMenu();

function chooseImage(foodImages) {
    // assigns random number to each image
    var randomNum = Math.floor(Math.random() * foodImages.length);
    // randomly selects image from array of images
    document.getElementById("foodPics").src = foodImages[randomNum];
}

  function defaultMenu(){
    document.getElementById("option1").innerHTML = "&loz; Special of the Day: Tipsy tilapia with rancid raisin sauce and turnip tots";
    document.getElementById("option2").innerHTML = "&loz; Soup of the Day: Beer Cheese and Vegetable Barley";
    document.getElementById("option3").innerHTML = "&loz; Check out our drinks menu for our list of wine, beer and alcoholic beverages";
  }

function getBeef(){
    localStorage.setItem('beef_1', '&loz; Spicy beef patty with impartial romaine and candied green beans');
    localStorage.setItem('beef_2', '&loz; Adorable beef patty with peppered cauliflower and resigned brussel sprouts');
    localStorage.setItem('beef_3', '&loz; Glazed beef ribs with chopped beets and peppered pepper medley');
    // localStorage.setItem('beef_4', 'Candied ribeye with adorable yams and simpering broccoli');
    // localStorage.setItem('beef_5', 'Restricted beef patty with smoky new potatoes and curried radishes');

      document.getElementById("option1").innerHTML = localStorage.getItem("beef_1");
      document.getElementById("option2").innerHTML = localStorage.getItem("beef_2");
      document.getElementById("option3").innerHTML = localStorage.getItem("beef_3");
  }

  function getPork(){
      localStorage.setItem('pork_1', '&loz; Roasted pork cutlet with sunny snow peas and underwhelming corn');
      localStorage.setItem('pork_2', '&loz; Lacerated pork cutlet with deep-fried green beans and passive beets');

      document.getElementById("option1").innerHTML = localStorage.getItem("pork_1");
      document.getElementById("option2").innerHTML = localStorage.getItem("pork_2");
  }

  function getChicken(){
    localStorage.setItem('chicken_1', '&loz; Carmelized chicken leg with lacerated radishes and resigned eggplant');
    localStorage.setItem('chicken_2', '&loz; Sunny chicken leg with wilted black beans and petulant romaine');

    document.getElementById("option1").innerHTML = localStorage.getItem("chicken_1");
    document.getElementById("option2").innerHTML = localStorage.getItem("chicken_2");
  }

  function getSeafood(){
    localStorage.setItem('seafood_1', '&loz; Candied tuna steak with peppered beets and shaved corn');
    localStorage.setItem('seafood_2', '&loz; Candied tuna steak with watery cauliflower and vibrant onions');
    localStorage.setItem('seafood_3', '&loz; Resigned scallops with swaddled brussel sprouts and carved yams');
    // localStorage.setItem('seafood_4', 'Canned scallops with sauteed eggplant and adorable beets');
    // localStorage.setItem('seafood_5', 'Smoky tuna steak with enveloped snow peas and overturned yams');

    document.getElementById("option1").innerHTML = localStorage.getItem("seafood_1");
    document.getElementById("option2").innerHTML = localStorage.getItem("seafood_2");
    document.getElementById("option3").innerHTML = localStorage.getItem("seafood_3");
  }

function getVegetarian() {
  localStorage.setItem('veggie_1', '&loz; Chopped omelet with vibrant spinach and aggressive snow peas');
  localStorage.setItem('veggie_2', '&loz; Candied pasta with pensive cauliflower and overturned tomatoes');
  localStorage.setItem('veggie_3', '&loz; Underwhelming eggplant with canned romaine and resigned broccoli');
  // localStorage.setItem('veggie_4', 'Simpering pasta with passive snow peas and peppered broccoli');
  // localStorage.setItem('veggie_5', 'Enveloped omelet with pensive cauliflower and deep-fried zucchini');
  // localStorage.setItem('veggie_6', 'Barbecued tofu with carved broccoli and adorable carrots');
  // localStorage.setItem('veggie_7', 'Peppered pasta with deep-fried cauliflower and pan-fried beets');
  // localStorage.setItem('veggie_8', 'Adorable pasta with resigned tomatoes and pan-fried corn');

  document.getElementById("option1").innerHTML = localStorage.getItem("veggie_1");
  document.getElementById("option2").innerHTML = localStorage.getItem("veggie_2");
  document.getElementById("option3").innerHTML = localStorage.getItem("veggie_3");

  }
