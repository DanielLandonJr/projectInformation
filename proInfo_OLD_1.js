document.addEventListener('DOMContentLoaded', function() { 
  const startTime = parseFloat(performance.now());

  let pInfo = new ProjectInformation();

  console.warn('LOADED projectInformation.js: ' + (performance.now() - startTime).toFixed(2) + 'ms'); 
});

class ProjectInformation {
  constructor() {
    this.g_Vars = {
      "global": {
        "titleApp": "Project Information",
        "titleDoc": "Section 10"
      },
      "header": {
        "heading": "Section 10",
        "title": "",
        "css": "background-color: #424242; padding: 0em;",
        "closeBtn": {
          "title": "Close Project Information"
        }
      },
      "lectures": {
        "heading": "Lectures Section",
        "title": "Contains List Of Lectures For This Section.",
        "css": "margin: 0 0 .5em 0;"
      },
      "notes": {
        "heading": "Notes Section",
        "title": "Contains Notes About The Lectures.",
        "css": "margin: 0 0 .5em 0;"
      },
      "footer": {
        "heading": "Additional Information",
        "title": "Additional Project Information.",
        "css": "background-color: #424242;",
        "footNote": "by Daniel C Landon Jr &copy; 2018"
      }
    };

    // format { "key": { "name": "value", "value": "value" } }
    this.g_LectureNotes = { 
      "86": { "name": "86", "value": "Iterators & Generators" },
      "88": { "name": "88", "value": "Symbols" },
      "89": { "name": "89", "value": "Desctructuring" },
      "90": { "name": "90", "value": "ES6 Maps" },
      "91": { "name": "91", "value": "ES6 Sets" }, 
      "86a": { "name": "86", "value": "Iterators & Generators" },
      "88a": { "name": "88", "value": "Symbols" },
      "89a": { "name": "89", "value": "Desctructuring" },
      "90a": { "name": "90", "value": "ES6 Maps" },
      "91a": { "name": "91", "value": "ES6 Sets" }
    };

    // format { "key": { "name": "value", "value": "value" } }
    this.g_Notes = { 
      "86": { "name": "86", "value": "Iterators & Generators" },
      "88": { "name": "88", "value": "Symbols" },
      "89": { "name": "89", "value": "Desctructuring" },
      "90": { "name": "90", "value": "ES6 Maps" },
      "91": { "name": "91", "value": "ES6 Sets" }, 
      "86a": { "name": "86", "value": "Iterators & Generators" },
      "88a": { "name": "88", "value": "Symbols" },
      "89a": { "name": "89", "value": "Desctructuring" },
      "90a": { "name": "90", "value": "ES6 Maps" },
      "91a": { "name": "91", "value": "ES6 Sets" }
    };

    // format { "key": { "name": "value", "value": "value" } }
    this.g_footerNotes = { "Iterator": { "name": "Iterator", "value": "I used an Iterator to add the external files. This could have been done with a basic loop." } };

    // external file list as json
    this.g_externalFiles = { 
      "pureBase": { "name": "pureBase", "active": false, "type": "css", "tag": "link", 
        "regex": "base-min.css",
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/base-min.css" },
      "pureButtons": { "name": "pureButtons", "active": false, "type": "css", "tag": "link", 
        "regex": "buttons-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/buttons-min.css" },
      "pureForms": { "name": "pureForms", "active": false, "type": "css", "tag": "link", 
        "regex": "forms-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/forms-min.css" },
      "pureFormsNR": { "name": "pureFormsNR", "active": false, "type": "css", "tag": "link", 
        "regex": "forms-nr-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/forms-nr-min.css" },
      "pureGrids": { "name": "pureGrids", "active": false, "type": "css", "tag": "link", 
        "regex": "grids-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/grids-min.css" },
      "pureGridResponsive": { "name": "pureGidsResponsive", "active": false, "type": "css", "tag": "link", 
        "regex": "grids-responsive-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css" },
      "pureMenus": { "name": "pureMenus", "active": false, "type": "css", "tag": "link", 
        "regex": "menus-min.css",
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/menus-min.css" },
      "pureTables": { "name": "pureTables", "active": false, "type": "css", "tag": "link", 
        "regex": "tables-min.css", 
        "website": "https://purecss.io/", 
        "url": "https://unpkg.com/purecss@1.0.0/build/tables-min.css" },
      "fontAwesome": { "name": "FontAwesome", "active": true, "type": "js", "tag": "script", 
        "regex": "fontawesome", 
        "website": "https://fontawesome.com/", 
        "url": "https://use.fontawesome.com/releases/v5.0.8/js/all.js" },
      "Normalize": { "name": "Normalize", "active": false, "type": "css", "tag": "link", 
        "regex": "normalize.css", 
        "website": "https://necolas.github.io/normalize.css/", 
        "url": "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css" },
      "Skeleton": { "name": "Skeleton", "active": false, "type": "css", "tag": "link", 
        "regex": "skeleton.min.css", 
        "website": "http://getskeleton.com/", 
        "url": "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" },
      "jQuery": { "name": "jQuery", "active": true, "type": "js", "tag": "script", 
        "regex": "jquery-3.3.1.min.js", 
        "website": "https://jquery.com/", 
        "url": "https://code.jquery.com/jquery-3.3.1.min.js" },
      "MaterialCSS": { "name": "MaterialCSS", "active": true, "type": "css", "tag": "link", 
        "regex": "materialize.min.css", 
        "website": "http://materializecss.com/", 
        "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" },
      "Material+Icons": { "name": "Material+Icons", "active": true, "type": "css", "tag": "link", 
        "regex": "material+icons", 
        "website": "https://material.io/icons/", 
        "url": "https://fonts.googleapis.com/icon?family=Material+Icons" },
      "MaterialJS": { "name": "MaterialJS", "active": true, "type": "js", "tag": "script", 
        "regex": "materialize.min.js", 
        "website": "http://materializecss.com/", 
        "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js" }
     };
    
    this.letsGetStarted();
  }

  letsGetStarted() {
    // add external file reference to html
    this.addExternalFiles();

    document.querySelector('title').innerHTML = this.g_Vars.global.titleDoc;
    
    // add show modal button lower left corner
    this.addShowModalButton();

    // add internal css
    this.addGeneralCSS();

    // create modal
    this.createModal();

    // add event listeners
    this.addEventListeners();
  }

  customizeSections() {
    
    this.sectionHeader();

    this.sectionLectures();

    this.sectionNotes();

    this.sectionFooter();
  };

  sectionHeader() {
    let div = document.querySelector('#p-section-header');

    div.classList.add('p-u-tx-center');
    div.style = this.g_Vars.header.css;
    div.title = this.g_Vars.header.title;

    div.innerHTML = `
      <div class='p-one p-col'>&nbsp</div>
      
      <div class='p-ten p-col'>
        <span class='p-u-tx-200'>${ this.g_Vars.header.heading }</span>
      </div>

      <div title='${this.g_Vars.header.closeBtn.title}' class='p-one p-col p-u-tx-100 p-close'><i class='fas fa-eye-slash'></i></div>
    `;
  }

  sectionLectures() {
    let div = document.querySelector('#p-section-lectures');
    let notesHTML = '';

    div.title = this.g_Vars.lectures.title;
    div.style = this.g_Vars.lectures.css;

    if (Object.keys(this.g_LectureNotes).length === 0) {
      notesHTML += `<li class='p-list-item'>No Lectures Found</li>`;
    } else {
      for (const key in this.g_LectureNotes) {
        notesHTML += `<li class='p-list-item'>Lecture: ${ this.g_LectureNotes[key].name } ...  ${ this.g_LectureNotes[key].value }</li>`;
      }
    }

    div.innerHTML = `
      <div class='p-one p-col'>&nbsp;</div>
      
      <div class='p-ten p-col p-u-tx-center'>
        <span class='p-list-title'>${ this.g_Vars.lectures.heading }</span>
        <div class='p-u-tx-left p-u-autoscroll'>
          <ul class='p-lists'>
            ${ notesHTML }
          </ul>
        </div>
      </div>

      <div class='p-one p-col'>&nbsp;</div>
    `;
  }

  sectionNotes() {
    let div = document.querySelector('#p-section-notes');
    let notesHTML = '';

    div.title = this.g_Vars.notes.title;
    div.style = this.g_Vars.notes.css;

    if (Object.keys(this.g_Notes).length === 0) {
      notesHTML += `<li class='p-list-item'>No Notes Found</li>`;
    } else {
      for (const key in this.g_Notes) {
        if (this.g_Notes.hasOwnProperty(key)) {
          const element = this.g_Notes[key];
          notesHTML += `<li class='p-list-item'>Note: ${ element.name } ... ${ element.value }</li>`;
        }
      }
    }

    div.innerHTML = `
      <div class='p-one p-col'>&nbsp;</div>
      
      <div class='p-ten p-col p-u-tx-center'>
        <span class='p-list-title'>${ this.g_Vars.notes.heading }</span>
        <div class='p-u-tx-left p-u-autoscroll'>
          <ul class='p-lists'>
            ${ notesHTML }
          </ul>
        </div>
      </div>

      <div class='p-one p-col'>&nbsp;</div>
    `;
  }

  sectionFooter() {
    let div = document.querySelector('#p-section-footer');
    let notesHTML = '';

    div.title = this.g_Vars.footer.title;
    div.style = this.g_Vars.header.css;

    for (const key in this.g_footerNotes) {
      if (this.g_footerNotes.hasOwnProperty(key)) {
        const element = this.g_footerNotes[key];
        notesHTML += `<li class='p-list-item'>${ element.value }</li>`;
      };
    };

    div.innerHTML = `
      <div class='p-one p-col'>&nbsp;</div>
      <div class='p-ten p-col p-u-tx-center'>
        <span class='p-list-title p-u-tx-100'>${ this.g_Vars.footer.heading }</span>
        <div class='p-u-tx-left'>
          <ul class='p-lists p-u-tx-75 p-u-autoscroll p-u-border'>
            ${ notesHTML }
          </ul>
        </div>
      </div>
      <div class='p-one p-col'>&nbsp;</div>
      <div class='p-row'>
        <div style='margin: .5em 0 0 .5em' class='p-twelve p-col p-u-tx-left p-u-tx-75'>
          <span>${ this.g_Vars.global.titleApp } ${ this.g_Vars.footer.footNote }</span>
        </div>
      <div class='p-row'>
    `;
  }

  addGeneralCSS() {
    let styleTag = document.createElement('style');
    let styleCSS = ``;

    styleCSS = `
      #container { z-index: 1; font-size: 100%; position: fixed; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); }
      #p-content { position: relative; background-color: #8A0651; color: #FFFFFF; top: 50px; margin: auto; border: 1px solid #888; max-width: 640px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4),0 6px 20px 0 rgba(0,0,0,0.38); }

      .p-hr { width: 99%; border: .2em solid #000000; margin: auto; padding: 0em; }

      /* #container .p-col { border: 1px solid black; } */
      
      .p-list-title { font-size: 1.5em;  font-weight: bold; color: #FFFFFF; }
      .p-list-item { margin: 0em; }
      .p-lists { padding: .15em; margin: .25em; list-style-type: circle; } 
      .p-close { cursor: pointer; padding: 0em 0em 0 0; color: black; }

      .p-slide-down { animation: slideDown 1s; }
      .p-slide-up { animation: slideUp 1s; }

      @keyframes slideDown { from { top:-1000px; opacity: 0 } to { top:0px; opacity: 1 } }

      @keyframes slideUp { from { top:0px; opacity: 1 } to { top:-1000px; opacity: 0 } }

      .p-u-tx-25 { font-size: .25em; }
      .p-u-tx-50 { font-size: .5em; }
      .p-u-tx-75 { font-size: .75em; }
      .p-u-tx-100 { font-size: 1em; }
      .p-u-tx-150 { font-size: 1.5em; }
      .p-u-tx-200 { font-size: 2em; }
      .p-u-tx-250 { font-size: 2.5em; }
      .p-u-tx-300 { font-size: 3em; }
      .p-u-tx-400 { font-size: 4em; }
      .p-u-tx-center { text-align: center; }
      .p-u-tx-left { text-align: left; }
      .p-u-tx-right { text-align: right; }
      .p-u-tx-bold { font-weight: bold; }

      .p-u-border { border: .2em solid black; }
      .p-u-hide-item { display: none; }
      .p-u-full-width { width: 100%; box-sizing: border-box; }
      .p-u-max-full-width { max-width: 100%; box-sizing: border-box; }
      .p-u-pull-right { float: right; }
      .p-u-pull-left { float: left; }
      .p-u-autoscroll { max-height: 8em; overflow: auto; }

      .p-col { width: 100%; float: left; box-sizing: border-box; }

      #p-container:after, .p-row:after, .p-u-cf { content: ""; display: table; clear: both; }

      @media (min-width: 400px) { 
        #p-container { width: 100%; padding: 0; }
      }

      @media (min-width: 550px) {
        #p-container { width: 100%; }
        .p-col { margin-left: 4%; }
        .p-col:first-child { margin-left: 0; }
        .p-one.p-col { width: 4.66666666667%; }
        .p-two.p-col { width: 13.3333333333%; }
        .p-three.p-col { width: 22%;            }
        .p-four.p-col { width: 30.6666666667%; }
        .p-five.p-col { width: 39.3333333333%; }
        .p-six.p-col { width: 48%;            }
        .p-seven.p-col { width: 56.6666666667%; }
        .p-eight.p-col { width: 65.3333333333%; }
        .p-nine.p-col { width: 74.0%;          }
        .p-ten.p-col { width: 82.6666666667%; }
        .p-eleven.p-col { width: 91.3333333333%; }
        .p-twelve.p-col { width: 100%; margin-left: 0; }
        .p-one-third.p-col { width: 30.6666666667%; }
        .p-two-thirds.p-col { width: 65.3333333333%; }
        .p-one-half.p-col { width: 48%; }
        .p-offset-by-one.p-col { margin-left: 8.66666666667%; }
        .p-offset-by-two.p-col { margin-left: 17.3333333333%; }
        .p-offset-by-three.p-col { margin-left: 26%;            }
        .p-offset-by-four.p-col { margin-left: 34.6666666667%; }
        .p-offset-by-five.p-col { margin-left: 43.3333333333%; }
        .p-offset-by-six.p-col { margin-left: 52%;            }
        .p-offset-by-seven.p-col { margin-left: 60.6666666667%; }
        .p-offset-by-eight.p-col { margin-left: 69.3333333333%; }
        .p-offset-by-nine.p-col { margin-left: 78.0%;          }
        .p-offset-by-ten.p-col { margin-left: 86.6666666667%; }
        .p-offset-by-eleven.p-col { margin-left: 95.3333333333%; }
        .p-offset-by-one-third.p-col { margin-left: 34.6666666667%; }
        .p-offset-by-two-thirds.p-col { margin-left: 69.3333333333%; }
        .p-offset-by-one-half.p-col { margin-left: 52%; }
      }
    `;

    styleTag.innerHTML = styleCSS

    document.head.appendChild(styleTag);
  };

  createModal() {
    let containerDiv = document.createElement('div');
    let contentDiv = document.createElement('div');

    containerDiv.id = 'container';
    containerDiv.classList.add('p-u-hide-item');
    
    contentDiv.id = 'p-content';
    
    contentDiv.appendChild(this.createDivSection('header'));
    contentDiv.appendChild(this.createHRTags('header'));
    contentDiv.appendChild(this.createDivSection('lectures'));
    contentDiv.appendChild(this.createHRTags('lectures'));
    contentDiv.appendChild(this.createDivSection('notes'));
    contentDiv.appendChild(this.createHRTags('notes'));
    contentDiv.appendChild(this.createDivSection('footer'));

    containerDiv.appendChild(contentDiv);

    document.body.insertBefore(containerDiv, document.body.firstChild);

    // customize individual sections
    this.customizeSections();
  }

  createHRTags(secTitle) {
    let hrtag = document.createElement('hr');

    hrtag.id = `p-hr-${secTitle}`;
    hrtag.classList.add('p-hr');

    return hrtag
  }

  createDivSection(secTitle){
    let div = document.createElement('div');
    let oneColDivA, tenColDiv, oneColDivB = document.createElement('div');
    let spanTag = document.createElement('span')

    div.id = `p-section-${secTitle}`;
    div.classList.add('p-row')

    return div
  }

  addShowModalButton() {
    // add the button that will show the modal on screen

    let xStyle = '';
    let xDiv = document.createElement('div');

    xStyle = `position: fixed; bottom: 0; right: 0; margin: 0em .5em 0em 0em; font-size: 1.5em; cursor: pointer;`;

    xDiv.id = 'p-show-modal';
    xDiv.innerHTML = `<span><i class='fas fa-eye-slash'></i></span>`;
    xDiv.style = xStyle;
    xDiv.title = `Show Project Information`;

    document.body.insertBefore(xDiv, document.body.firstChild);
  }

  addEventListeners() {
    // add all project event listeners
    
    //show modal button
    document.querySelector('#p-show-modal').addEventListener('click', () => {
      document.querySelector('#container').classList.remove('p-u-hide-item');
      document.querySelector('#container').classList.remove('p-slide-up');
      document.querySelector('#container').classList.add('p-slide-down');

      document.querySelector('#p-show-modal').classList.add('p-u-hide-item');
    });

    // close project information
    document.querySelector('.p-close').addEventListener('click', () => {
      document.querySelector('#container').classList.add('p-slide-up');
      document.querySelector('#container').classList.remove('p-slide-down');
      
      document.querySelector('#p-show-modal').classList.remove('p-u-hide-item');

      // pause for 1 sec (animation length), then add hide class. Otherwise the div just gets hidden fist before animation even runs.
      setTimeout(() => {
        document.querySelector('#container').classList.add('p-u-hide-item');
      }, 1000);
    });
  }

  compareFiles(xLink, xRegEx) {
    // compare xLink to the regex expression supplied

    let xTest = RegExp(xRegEx, 'i');

    if(xTest.test(xLink)) { return true } else { return false};
  }

  addToHTML(xURL, xTag, xType) {
    // create tag for url to include in html

    let link = '';

    link = document.createElement(xTag);
    
    switch(xType) {
      case 'css':
        link.href = xURL;
        link.rel = 'stylesheet';
        break;
      case 'js':
        link.src = xURL;
        break;
    };

    return link;
  }

  addExternalFiles() {
    // iterator

    // this one works well

    // convert json to array
    let x_externalFiles = Object.keys(this.g_externalFiles).map((item) => { return this.g_externalFiles[item] });

    let x_iteratorFunction = (x_array) => {

      let x_count = -1;
      let x_returnValue = '';
      let x_addToDom = false;
      
    
      return {
        next: () => {
          x_count++;

          if (x_array[x_count].active) {
            // tag active

            // search of list of links
            let x_htmlLinks = Array.from(document.querySelectorAll(x_array[x_count].tag));

            if (x_htmlLinks !== undefined && x_htmlLinks.length > 0) {
              // list html links found...loop and compare
              let x_searchTag = x_array[x_count].tag
              for (let index = 0; index < x_htmlLinks.length; index++) {
                // loop through links list to compare

                switch(x_array[x_count].type) {
                  case "css":
                    x_searchTag = x_htmlLinks[index].href
                    break;
                  case "js":
                    x_searchTag = x_htmlLinks[index].src
                    break;
                };

                if (this.compareFiles(x_searchTag, x_array[x_count].regex)) {
                  x_returnValue = `NOT Added To HTML, Already Exists: ${x_array[x_count].name} ${x_array[x_count].type}`;
                  x_addToDom = false;
                  break;
                } else {
                  x_addToDom = true;
                };
              };
            } else {
              // no list found, add to dom
              x_addToDom = true;
            };
          } else {
            // tag not active, do not add to dom
            x_returnValue = `NOT Added To HTML, Inactive status: ${x_array[x_count].name} ${x_array[x_count].type}`;
            x_addToDom = false;
          };

          if (x_addToDom) {
            x_returnValue = `Added To HTML: ${x_array[x_count].name} ${x_array[x_count].type}`;
            document.head.appendChild(this.addToHTML(x_array[x_count].url, x_array[x_count].tag, x_array[x_count].type));
          };
  
          return x_count < x_array.length ? 
            { value: x_returnValue, done: false } : 
            { value: undefinded, done: true };
        }

      };

    };

    let x_iteratorSearch = x_iteratorFunction(x_externalFiles);
    
    for(let item of x_externalFiles) {
      // console.log(x_iteratorSearch.next()); // iterator
      this.g_footerNotes[item.name] = { name: item.name, value: x_iteratorSearch.next().value };
    };

    // ---------------------------------------------------

    // // this one works well

    // // convert json to array
    // let x_TempArray = Object.keys(this.g_extFiles).map((item) => { return this.g_extFiles[item] });

    // let x_fileIterator = (x_array) => {

    //   let count = -1;
    //   let retValue = '';
    
    //   return {
    //     next: () => {
    //       count++;
  
    //       if (x_array[count].active) { // is the reference active?
    //         document.head.appendChild(this.addToHTML(x_array[count].url, x_array[count].tag, x_array[count].type));
    //         retValue = `Added To HTML: ${x_array[count].name} ${x_array[count].type}`;
    //       } else {
    //         retValue = `NOT Added To HTML, Inactive status: <a href='${x_array[count].website}'>${x_array[count].name} ${x_array[count].type}</a>`;
    //       }
  
    //       return count < x_array.length ? 
    //         { value: retValue, done: false } : 
    //         { value: undefinded, done: true };
    //     }
    //   };

    // };

    // let x_externalFiles = x_fileIterator(x_TempArray);
    
    // for(let item of x_TempArray) {
    //   // console.log(x_externalFiles.next()); // iterator
    //   this.g_Footer[item.name] = { name: item.name, value: x_externalFiles.next().value };
    // };

    // ---------------------------------------------------

    // this version works but it is slow...for some reason the links array keeps getting bigger and bigger....2500+ in length by the times its done and takes about +2.5s to run
    // let count = -1; // set to -1 so first iteration is zero
    
    // return {
    //   next: () => {
    //     let retValue = '';
    //     let tmpCompare = '';
    //     let tmpURL = ''

    //     count++;

    //     let links = document.querySelectorAll(array[count].tag);

    //     if(links !== undefined && links.length > 0) {
    //       // links found, loop through
    //       for (let i = 0; i < links.length; i++) {
    //         // compare list of links found to link supplied to find a match
    //         switch(array[count].type) {
    //           case 'css':
    //             tmpCompare = this.compareFiles(links[i].href, array[count].regex);
    //             tmpURL = links[i].href;
    //             break;
    //           case 'js':
    //             tmpCompare = this.compareFiles(links[i].src, array[count].regex);
    //             tmpURL = links[i].src;
    //             break;
    //         };
    //         if(tmpCompare) {
    //           // a match was found
    //           retValue = `${ array[count].name.toUpperCase() } Already Part Of HTML.`;
    //           break;
    //         } else {
    //           // no match found
    //           // add to dom
    //           document.head.insertBefore(this.addToHTML(array[count].url, array[count].tag, array[count].type), document.head.firstChild);
    //           retValue = `${ array[count].name.toUpperCase() } Added To HTML.`;
    //         }
    //       };
    //     } else {
    //       // no links found in html
    //       // add to dom
    //       document.head.insertBefore(this.addToHTML(array[count].url, array[count].tag, array[count].type), document.head.firstChild);
    //       retValue = `${ array[count].name.toUpperCase() } Added To HTML.`;
    //     }

    //     return count < array.length ? 
    //       { value: retValue, done: false } : 
    //       { value: undefinded, done: true };
    //   }
    // };
  }

  // END OF CLASS DEFINITION
}