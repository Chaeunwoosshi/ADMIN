

// JavaScript
    function showContent(page) {
      // Hide all content divs
      var contentDivs = document.querySelectorAll('.content');
      contentDivs.forEach(function(div) {
        div.style.display = 'none';
      });


// Deactivate all buttons
      var menuButtons = document.querySelectorAll('.bottom-menu button');
      menuButtons.forEach(function(button) {
        button.classList.remove('active');
      });

      // Show the selected content div
      document.getElementById(page).style.display = 'block';

      // Activate the clicked button
      event.currentTarget.classList.add('active');
    }
// Add event listener for the new Series Code button
var seriesCodeBtn = document.querySelector('.bottom-menu button:last-child');
seriesCodeBtn.addEventListener('click', function() {
  showContent('links');
});

// Function to show content based on selected option
function showContent(page) {
  var allContents = document.querySelectorAll('.content');
  allContents.forEach(function(content) {
    content.style.display = 'none';
  });
  document.getElementById(page).style.display = 'block';
  updateActiveButton(page); // Update active button
}
// Function to show content based on selected option
function showContent(page) {
  console.log('showContent called with page:', page); // Debugging statement
  var allContents = document.querySelectorAll('.content');
  allContents.forEach(function(content) {
    content.style.display = 'none';
  });
  document.getElementById(page).style.display = 'block';
  updateActiveButton(page); // Update active button
}

// Function to update active button style
function updateActiveButton(selectedPage) {
  var allButtons = document.querySelectorAll('.bottom-menu button');
  allButtons.forEach(function(button) {
    if (button.getAttribute('onclick').includes(selectedPage)) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

 
    const menuButton = document.getElementById('menuButton');
    const overlay = document.getElementById('overlay');

    // Open sidebar on menu button click
    menuButton.addEventListener('click', () => {
      overlay.classList.add('active');
    });

    // Close sidebar when clicking outside the sidebar
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  
 
    
const lightIcon = document.getElementById("dark-icon");
const darkIcon = document.getElementById("light-icon");
// Check if dark mode is preferred
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let darkMode = darkModeMediaQuery.matches;

// Set dark-mode class on body if darkMode is true and pick icon
if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.style.display = "none";
} else {
  lightIcon.style.display = "none";
}
// Toggle dark mode on button click
function toggleDarkMode() {
  // Toggle darkMode variable
  darkMode = !darkMode;

  // Toggle dark-mode class on body
  document.body.classList.toggle("dark-mode");

  // Toggle light and dark icons
  if (darkMode) {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
  } else {
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";
  }
}


// JavaScript for Series Generator
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('generateBtn').addEventListener('click', function() {
    var thumbnailLink = document.getElementById('thumbnailInput').value;
    var iframeLink = document.getElementById('iframeInput').value;
    var synopsis = document.getElementById('synopsisInput').value;
    var casts = document.getElementById('castsInput').value;
    var director = document.getElementById('directorInput').value;
    var release = document.getElementById('releaseInput').value;
    var country = document.getElementById('countryInput').value;
    
    var tableCode = '<table class="blueTable">\n<tbody>\n';
    tableCode += '<tr>\n<td>Casts:</td>\n<td>' + casts + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Director:</td>\n<td>' + director + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Release:</td>\n<td>' + release + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Country:</td>\n<td>' + country + '</td>\n</tr>\n';
    tableCode += '</tbody>\n</table>';
    
 var generatedCode = '<html>\n' +
    '<img src="' + thumbnailLink + '"/>\n' +
    '<iframe id="fullscreen-Button" class="lazyload" data-src="' + iframeLink + '" src="' + iframeLink + '" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>\n' +
    '<p>' + synopsis + '</p>\n' +
    tableCode + '\n\n' +
    '</html>'; // Add line break and spacing here

    document.getElementById('codeOutput').value = generatedCode;
  });

  document.getElementById('copyBtn').addEventListener('click', function() {
    var codeOutput = document.getElementById('codeOutput');
    codeOutput.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
  });
});

 var iframeCode ='<iframe class="lazyload" data-src="/" src="/" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>';
 
document.getElementById('addEpisodeBtn').addEventListener('click', function() {
    var episodesDiv = document.getElementById('episodes');
    var episodeDiv = document.createElement('div');
    episodeDiv.classList.add('episode');
    
    var episodeCount = document.querySelectorAll('.episode').length + 1;
    
    var episodeInput = document.createElement('input');
    episodeInput.type = 'text';
    episodeInput.classList.add('episodeInput');
    episodeInput.placeholder = 'Enter Episode ' + episodeCount;
    
    var removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    
    removeBtn.addEventListener('click', function() {
        episodesDiv.removeChild(episodeDiv);
    });
    
    episodeDiv.appendChild(episodeInput);
    episodeDiv.appendChild(removeBtn);
    
    episodesDiv.appendChild(episodeDiv);
});

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the Generate Code button
    document.getElementById('generateBtn').addEventListener('click', function() {
        // Retrieve input values
        var thumbnailLink = document.getElementById('thumbnailInput').value;
        var iframeLink = document.getElementById('iframeInput').value;
        var synopsis = document.getElementById('synopsisInput').value;
        var casts = document.getElementById('castsInput').value;
        var director = document.getElementById('directorInput').value;
        var release = document.getElementById('releaseInput').value;
        var country = document.getElementById('countryInput').value;


var generatedCode = '<html>\n' +
    '<img src="' + thumbnailLink + '"/>\n' +
    '<iframe class="lazyload" id="fullscreen-Button" data-src="' + iframeLink + '" src="' + iframeLink + '" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>\n' +
    '<p>' + synopsis + '</p>\n' +
    '<table class="blueTable">\n' +
    '<tbody>\n' +
    '<tr>\n<td>Casts:</td>\n<td>' + casts + '</td>\n</tr>\n' +
    '<tr>\n<td>Director:</td>\n<td>' + director + '</td>\n</tr>\n' +
    '<tr>\n<td>Release:</td>\n<td>' + release + '</td>\n</tr>\n' +
    '<tr>\n<td>Country:</td>\n<td>' + country + '</td>\n</tr>\n' +
    '</tbody>\n' +
    '</table>\n' +
    '<a class="watchbtn" href="javascript:void(0);" id="fullscreenButton">Watch Now</a>\n' +
    '</html>';



        // Display generated code in the textarea
        document.getElementById('codeOutput').value = generatedCode;
    });

    // Add event listener for the Copy button
    document.getElementById('copyBtn').addEventListener('click', function() {
        var codeOutput = document.getElementById('codeOutput');
        codeOutput.select();
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    });
});

document.getElementById('generateBtn3').addEventListener('click', function() {
    var seriesThumbnail = document.getElementById('seriesThumbnailInput3').value;
    var casts = document.getElementById('castsInput3').value;
    var director = document.getElementById('directorInput3').value;
    var releaseDate = document.getElementById('releaseInput3').value;
    var country = document.getElementById('countryInput3').value;
    var synopsis = document.getElementById('synopsisInput3').value;
    var episodes = document.querySelectorAll('.episodeInput');
    
    var episodeList = '';
    episodes.forEach(function(episode, index) {
        episodeList += '<a href="" class="epi" data-src="' + episode.value + '">' + (index + 1) + '</a>';
    });
    
    var tableCode = '<table class="blueTable">\n<tbody>\n';
    tableCode += '<tr>\n<td>Casts:</td>\n<td>' + casts + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Director:</td>\n<td>' + director + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Release Date:</td>\n<td>' + releaseDate + '</td>\n</tr>\n';
    tableCode += '<tr>\n<td>Country:</td>\n<td>' + country + '</td>\n</tr>\n';
    tableCode += '</tbody>\n</table>';
    
var generatedCode = `<html>
${iframeCode}
<img src="${seriesThumbnail}"/>
<p>${synopsis}</p>
<table class="blueTable">
<tbody>
<tr>
<td>Casts:</td> <td>${casts}</td>
</tr>
<tr>
<td>Director:</td> <td>${director}</td>
</tr>
<tr>
<td>Release Date:</td> <td>${releaseDate}</td>
</tr>
<tr>
<td>Country:</td> <td>${country}</td>
</tr>
</tbody>
</table>
<div id="episodeList">${episodeList}</div>
</html>`;

   
    document.getElementById('codeOutput3').value = generatedCode;
});

document.getElementById('copyBtn3').addEventListener('click', function() {
    var codeOutput = document.getElementById('codeOutput3');
    codeOutput.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});

// Function to open a specific tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function selectOption(option) {
  document.getElementById("myDropdown").classList.remove("show");
  if (option === "seriesCode") {
    document.getElementById("seriesCode").style.display = "block";
    document.getElementById("movieCode").style.display = "none";
    document.getElementById("dropdownTitle").innerHTML = 'Series Code <i class="fas fa-caret-down"></i>';
    document.getElementById("postOption").style.display = "none";
    document.getElementById("movieOption").style.display = "block";
  } else if (option === "movieCode") {
    document.getElementById("seriesCode").style.display = "none";
    document.getElementById("movieCode").style.display = "block";
    document.getElementById("dropdownTitle").innerHTML = 'Movie Code <i class="fas fa-caret-down"></i>';
    document.getElementById("movieOption").style.display = "none";
    document.getElementById("postOption").style.display = "block";
  }
}
// Set default content to "Post Code"
selectOption("seriesCode");


//image Carousel
(() => {
  const images_list = [
    {
      "url": "https://www.html-code-generator.com/images/slider/1.png",
      "alt": "",
      "name": "image 1",
      "link": ""
    },
    {
      "url": "https://www.html-code-generator.com/images/slider/2.png",
      "alt": "",
      "name": "image 2",
      "link": ""
    },
    {
      "url": "https://www.html-code-generator.com/images/slider/3.png",
      "alt": "",
      "name": "image 3",
      "link": ""
    },
    {
      "url": "https://www.html-code-generator.com/images/slider/4.png",
      "alt": "",
      "name": "image 4",
      "link": ""
    },
    {
      "url": "https://www.html-code-generator.com/images/slider/5.png",
      "alt": "",
      "name": "image 5",
      "link": ""
    }
  ];

  let slider_id = document.querySelector("#hcg-slider-1");

  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
    images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:flex"' : '') + '>' +
        '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
        '</a>';
    dots_div += '<a href="#" class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></a>';
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

  let slide_index = 0;

  const images = slider_id.querySelectorAll(".hcg-slides");
  const dots = slider_id.querySelectorAll(".hcg-slide-dot");
  const showSlides = () => {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("dot-active");
      if (i == slide_index) {
        images[i].style.display = "flex";
        dots[i].classList.add("dot-active");
      }
    }
  };

  const dot_click = event => {
    event.preventDefault();
    slide_index = event.target.dataset.id;
    showSlides();
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
  }
  setInterval(() => {
    slide_index++;
    showSlides();
  }, 2000);
})();
        
// Function to toggle the dashboard sidebar
function toggleDashboardSidebar() {
  var sidebar = document.getElementById("dashboardSidebar");
  var contentAreas = document.querySelectorAll(".content");

  if (sidebar.style.left === "-280px") {
    sidebar.style.left = "0"; // Slide into view
    contentAreas.forEach(function(content) {
      content.classList.add("blur-effect"); // Add blur effect to all content areas
    });
  } else {
    sidebar.style.left = "-280px"; // Slide out of view
    contentAreas.forEach(function(content) {
      content.classList.remove("blur-effect"); // Remove blur effect from all content areas
    });
  }
}

// Event listener for the menu button click
document.getElementById("menuButton").addEventListener("click", toggleDashboardSidebar);

// Function to close sidebar when clicking outside of it
window.onclick = function(event) {
  var sidebar = document.getElementById("dashboardSidebar");
  var menuButton = document.getElementById("menuButton");
  var contentAreas = document.querySelectorAll(".content");

  if (event.target !== sidebar && event.target !== menuButton) {
    sidebar.style.left = "-280px"; // Slide out of view
    contentAreas.forEach(function(content) {
      content.classList.remove("blur-effect"); // Remove blur effect from all content areas
    });
  }
}
//video sliding
const videos = document.querySelectorAll('.sliding-video iframe');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            // Stop all videos
            videos.forEach(v => {
                if (v !== video) {
                    v.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        });
    });

 function toggleGrids() {
        const grids = document.querySelector('.grids');
        grids.classList.toggle('grids-2');
        grids.classList.toggle('grids-3');
    }
 
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");

searchIcon.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent click event from propagating to document
  searchBar.classList.toggle("active");
});

document.getElementById("searchInput").addEventListener("input", function() {
  const searchValue = this.value.toLowerCase();
  const gridItems = document.querySelectorAll(".grid");

  gridItems.forEach(function(item) {
    const title = item.querySelector(".title").textContent.toLowerCase();
    const subtitle = item.querySelector(".subtitle").textContent.toLowerCase();
    const isVisible = title.includes(searchValue) || subtitle.includes(searchValue);

    item.style.display = isVisible ? "block" : "none";
  });
});

// Add event listener to the document to collapse search bar when clicked outside
document.addEventListener("click", function(event) {
  if (!searchBar.contains(event.target)) {
    searchBar.classList.remove("active");
  }
});


// Add an event listener to detect touch events
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var startY;
var pullDown = false;

function handleTouchStart(event) {
  // Record the starting position of the touch event
  startY = event.touches[0].clientY;
  pullDown = false;
}

function handleTouchMove(event) {
  if (document.body.scrollTop === 0) {
    pullDown = true;
    // Check if the user is pulling down
    var currentY = event.touches[0].clientY;
    var diff = currentY - startY;
    
    if (diff > 50) { // Set a threshold for the pull-down distance
      // Show the pull-down indicator and trigger the reload action
      document.getElementById("pullDownIndicator").style.display = "block";
      // Reload your content or perform any necessary action
      // For example, window.location.reload() to reload the page
    }
  }
}

    const rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.blogger.com%2Ffeeds%2F3434317895581666633%2Fposts%2Fdefault&api_key=f1wz56jkpxrjxaruc4pum1xymrkfa8fxodu8i9xh&count=99';

    async function fetchRSSData() {
        try {
            const response = await fetch(rssUrl);
            const data = await response.json();
            displayRandomItems(data.items);
            const orderedCategories = ['Short Drama', 'Series', 'Movie']; // Order categories here
            displayCategories(data.items, orderedCategories);
        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    }

    function extractImageFromContent(content) {
        const imgTag = content.match(/<img.*?src="(.*?)"/);
        return imgTag ? imgTag[1] : 'https://via.placeholder.com/100x150'; // Fallback image with appropriate size
    }

    function displayRandomItems(items) {
        const randomSlider = document.getElementById('random-slider');
        const indicatorsContainer = document.getElementById('carousel-indicators');
        const shuffledItems = items.sort(() => 0.5 - Math.random()); // Shuffle items
        const randomItems = shuffledItems.slice(0, 5); // Get 5 random items

        randomItems.forEach((item, index) => {
            const sliderItem = document.createElement('div');
            sliderItem.className = 'carousel-item';

            const img = document.createElement('img');
            img.src = extractImageFromContent(item.content || item.description);
            sliderItem.appendChild(img);

            const title = document.createElement('div');
            title.className = 'carousel-title';
            title.textContent = item.title;
            sliderItem.appendChild(title);

            randomSlider.appendChild(sliderItem);

            // Create indicators
            const indicator = document.createElement('div');
            indicator.className = 'indicator' + (index === 0 ? ' active' : '');
            indicator.dataset.index = index; // Set the index for the indicator
            indicatorsContainer.appendChild(indicator);
        });

        // Automatic slide functionality
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % randomItems.length;
            updateCarousel(currentIndex);
        }, 3000); // Change slide every 3 seconds
    }

    function updateCarousel(index) {
        const carouselTrack = document.getElementById('random-slider');
        const indicators = document.querySelectorAll('.indicator');

        // Move carousel to the current index
        const offset = index * 100; // 100% for one item
        carouselTrack.style.transform = `translateX(-${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle('active', idx === index);
        });
    }

    function displayCategories(items, orderedCategories) {
        const container = document.getElementById('content-container');
        const categories = {};

        items.forEach(item => {
            item.categories.forEach(category => {
                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push(item);
            });
        });

        orderedCategories.forEach(category => {
            if (categories[category]) {
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';

                const categoryTitle = document.createElement('div');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = category;
                categorySection.appendChild(categoryTitle);

                const slider = document.createElement('div');
                slider.className = 'horizontal-slider';

                categories[category].forEach(item => {
                    const sliderItem = document.createElement('div');
                    sliderItem.className = 'item';

                    const link = document.createElement('a');
                    link.href = item.link;

                    const img = document.createElement('img');
                    img.src = extractImageFromContent(item.content || item.description);
                    link.appendChild(img);

                    const playButton = document.createElement('div');
                    playButton.className = 'play-button';
                    link.appendChild(playButton);

                    const title = document.createElement('div');
                    title.className = 'item-title';
                    title.textContent = item.title;
                    link.appendChild(title);

                    sliderItem.appendChild(link);
                    slider.appendChild(sliderItem);
                });

                categorySection.appendChild(slider);
                container.appendChild(categorySection);
            }
        });
    }

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) { // Change 100 to the desired scroll height
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    fetchRSSData();

    function filterTransactions() {
        const searchValue = document.getElementById('user-search').value.toLowerCase();
        const transactions = document.getElementsByClassName('user-transaction');

        for (const transaction of transactions) {
            const transactionText = transaction.innerText.toLowerCase();

            if (transactionText.includes(searchValue)) {
                transaction.style.display = 'flex';
            } else {
                transaction.style.display = 'none';
            }
        }
    }

 
       function updateDateTime() {
      const dateElement = document.getElementById("date");
      const timeElement = document.getElementById("time");
      const now = new Date();

      // Format the date
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', options);

      // Format the time in 12-hour format with AM/PM
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;

      // Update the date and time
      dateElement.textContent = `Date: ${dateString}`;
      timeElement.textContent = `Time: ${hours}:${minutes} ${ampm}`;
    }

    // Update the date and time every minute
    setInterval(updateDateTime, 60000);

    // Initial call to display the date and time immediately
   updateDateTime();H
  
  
    // Function to generate a random key
    function keyGenerate() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomKey = '';
      for (let i = 0; i < 10; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      document.getElementById('key-display').textContent = randomKey;
    }

    // Function to copy the generated key to the clipboard
    function keyCopy() {
      const keyElement = document.getElementById('key-display');
      const keyText = keyElement.textContent;

      if (keyText !== 'Click the button to generate a key') {
        navigator.clipboard.writeText(keyText).then(() => {
          alert('Key copied to clipboard!');
        }).catch(err => {
          console.error('Failed to copy key: ', err);
        });
      } else {
        alert('Please generate a key first!');
      }
    }