/*jshint esversion: 6 */


// //Fetch JSON FILE
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        const response = xhttp.responseText;
//        const obj = JSON.parse(response);


//        //console.table(obj);
//        //console.dir(obj.resourses.length);

//        for(let i = 0; i < obj.resourses.length; i++){

//        	//Generate HTML
//        const GenerateHTML = `<div class="filterDiv card ${obj.resourses[i].category}">
// 				<a href="${obj.resourses[i].site_url}" alt="${obj.resourses[i].title}" target="_blank"><i class='bx bx-link'></i></a>
// 				<div class="img-block">
// 				  <img src="${obj.resourses[i].image_url}" alt="">
// 			    </div>
// 				<div class="card-body">
// 					<h3>${obj.resourses[i].title}</h3>
// 				</div>
// 			</div>
//        `;

//        GALLERY.innerHTML += GenerateHTML;
//        }
//     }
// };
// xhttp.open("GET", "../JSON-resourses.json", true);
// xhttp.send();


//FILTER
filterSelection("all");

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/*jshint esversion: 6 */
const FETCH_REQUEST = (url) => {
    "use strict";
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    const GALLERY = document.getElementById("gallery");
                    for (let i = 0; i < data.resourses.length; i++) {

                        //Generate HTML
                        const GenerateHTML = `<div class="filterDiv card ${data.resourses[i].category}">
						<a href="${data.resourses[i].site_url}" alt="${data.resourses[i].title}" target="_blank" title="Visit Website"><i class='bx bx-link'></i></a>
						<div class="img-block">
						  <img src="${data.resourses[i].image_url}" alt="">
					    </div>
						<div class="card-body">
							<h3>${data.resourses[i].title}</h3>
						</div>
					</div>
		       `;

                        GALLERY.innerHTML += GenerateHTML;

                    } //FOR LOOP END

                    console.log(response.headers.get('Content-Type'));
                    console.log(response.headers.get('Date'));

                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.type);
                    console.log(response.url);

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
};

FETCH_REQUEST('JSON-resourses.json');
