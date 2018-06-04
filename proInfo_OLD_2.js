const myApp = {};
(function() {
  const startTime = parseFloat(performance.now());
  
  let x_jsonData = {
    "global": {
      "applicationTitle": "Project Information",
      "copyRight": "by Daniel C Landon Jr &copy; 2018",
      "htmlComment": "injected by projectInformaton.js" },
    "sections": {  },
    "notes": {  },
    "files": {  }
  };

  this.getJSON = () => {
    return x_jsonData;
  };

  this.setJson = (xSection, xName, xData) => {
    // only difference here is where in the json to write the item...the switch below
    // unsure how to pass in value and use it to determine where to write json
    switch(xSection) {
      case 'global':
        x_jsonData.global[xName] = JSON.parse(xData);
        break;
      case 'sections':
        x_jsonData.sections[xName] = JSON.parse(xData);
        break;
      case 'notes':
        x_jsonData.notes[xName] = JSON.parse(xData);
        break;
      case 'files':
        x_jsonData.files[xName] = JSON.parse(xData);
        break;
    };
  };

  this.guid = () => {
    // pulled this on the web. simple enough once you look at it

    // used mostly to generate random names for json entries. best attempt to try
    // to insure names are unique...also its cool as hell.
    const s4 = () => Math
      .floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
  };

  this.randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  };

  addExtDataToJSON = () => {
    // add external references to json...seperate section as this one is kinda big
    // format { "name": "", "active": false, "type": "", "tag": "", "regex": "", "website": "", "url": "" }
    let xExtFiles = [ 
      { "name": "Material-Components-Web", "active": true, "type": "css", "tag": "link", "regex": "material-components-web", "website": "https://material.io/components/", "url": "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" },
      { "name": "WingCSS", "active": false, "type": "css", "tag": "link", "regex": "wingcss", "website": "http://usewing.ml/", "url": "https://unpkg.com/wingcss@1.0.0-beta/dist/wing.min.css" },
      { "name": "FontAwesome", "active": false, "type": "js", "tag": "script", "regex": "fontawesome", "website": "https://fontawesome.com/", "url": "https://use.fontawesome.com/releases/v5.0.8/js/all.js" },
      { "name": "Normalize", "active": false, "type": "css", "tag": "link", "regex": "normalize.css", "website": "https://necolas.github.io/normalize.css/", "url": "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css" },
      { "name": "Skeleton", "active": false, "type": "css", "tag": "link", "regex": "skeleton.min.css", "website": "http://getskeleton.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" },       
      { "name": "MaterialJS", "active": false, "type": "js", "tag": "script", "regex": "materialize.min.js", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js" },
      { "name": "MaterialCSS", "active": false, "type": "css", "tag": "link", "regex": "materialize.min.css", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css" },
      { "name": "Material+Icons", "active": true, "type": "css", "tag": "link", "regex": "material+icons", "website": "https://material.io/icons/", "url": "https://fonts.googleapis.com/icon?family=Material+Icons" },
      { "name": "pureBase", "active": false, "type": "css", "tag": "link", "regex": "base-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/base-min.css" },
      { "name": "pureButtons", "active": false, "type": "css", "tag": "link", "regex": "buttons-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/buttons-min.css" },
      { "name": "pureForms", "active": false, "type": "css", "tag": "link", "regex": "forms-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/forms-min.css" },
      { "name": "pureFormsNR", "active": false, "type": "css", "tag": "link", "regex": "forms-nr-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/forms-nr-min.css" },
      { "name": "pureGrids", "active": false, "type": "css", "tag": "link", "regex": "grids-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/grids-min.css" },
      { "name": "pureGidsResponsive", "active": false, "type": "css", "tag": "link", "regex": "grids-responsive-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css" },
      { "name": "pureMenus", "active": false, "type": "css", "tag": "link", "regex": "menus-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/menus-min.css" },
      { "name": "pureTables", "active": false, "type": "css", "tag": "link", "regex": "tables-min.css", "website": "https://purecss.io/", "url": "https://unpkg.com/purecss@1.0.0/build/tables-min.css" }
    ];

    for (let index = 0; index < xExtFiles.length; index++) {
      let xTemp = `{ "name": "${ xExtFiles[index].name }", "active": ${ xExtFiles[index].active }, "type": "${ xExtFiles[index].type }", "tag": "${ xExtFiles[index].tag }", "regex": "${ xExtFiles[index].regex }", "website": "${ xExtFiles[index].website }", "url": "${ xExtFiles[index].url }" }`;

      myApp.setJson('files', myApp.guid(), xTemp);
    }
  };

  addSectionDataToJSON = () => {
    // add section information to json...did this because the reference information is seperated as well as the notes
    let xSectionData = [
      { "title": "Section 1 Title", "heading": "section 1 heading", "titleText": "section 1 title text" },
      { "title": "Section 2 Title", "heading": "section 2 heading", "titleText": "section 2 title text" },
      { "title": "Section 3 Title", "heading": "section 3 heading", "titleText": "section 3 title text" },
      { "title": "Section 4 Title", "heading": "section 4 heading", "titleText": "section 4 title text" }
    ];

    for (let index = 0; index < xSectionData.length; index++) {
      let xTemp = `{ "title": "${ xSectionData[index].title }", "heading": "${ xSectionData[index].heading }", "titleText": "${ xSectionData[index].titleText }" }`;

      myApp.setJson('sections', myApp.guid(), xTemp);
    }
  };

  addExtDataToJSON();
  addSectionDataToJSON();

  
  const projectPromise = new Promise((resolve, reject) => {
    // the following promise is used to dynamically load jQuery
    // best way i have found to make sure jquery is ready to use for code in this file
    let jqueryScript = document.createElement('script');
  
    jqueryScript.async = true;
    jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    jqueryScript.type = 'text/javascript';
    
    jqueryScript.onload = () => { (typeof jQuery) ? 
      [ resolve() ] : 
      [ reject(error) ]; 
    };
  
    document.head.insertBefore(jqueryScript, document.head.firstElementChild);
  });

  let x_msg = '';

  projectPromise
    .then(() => {
      console.warn('jQuery Loaded Successfully');
      
      let pInfo = new ProjectInformation();

      pInfo.letsGetStarted();
  
      x_msg = 'Loaded Successfully';
    })
    .catch((error) => {
      console.warn('jQuery Not Loaded, Problem Encountered!');
      console.log(error);
  
      x_msg = 'Loaded With Errors:';
    })
    .then(() => {
      console.warn('projectInfomation.js ' + x_msg + ': ' + (performance.now() - startTime).toFixed(2) + 'ms');
    });

  // end promise

}).apply(myApp);

// class definitions

class ProjectInformation {

  constructor() {
    // this.letsGetStarted();
  }

  letsGetStarted() {
    // starting point for all processing

    // add external file support to html
    this.addExternalFiles();

    // add internal css to html
    this.addInternalCSS();

    // add internal script to html
    this.addInternalScript();

    // add snackbar to html

    // add modal to html
    this.addModal();

    // add button to html that will show modal
    this.addShowButton();

    // create event listeners
    this.addEventListeners();
  }

  addEventListeners() {
    console.log(`TODO: ${ this.addEventListeners.name }`);
  }

  addModal() {
    console.log(`TODO: ${ this.addModal.name }`);
  }

  addShowButton() {
    console.log(`TODO: ${ this.addShowButton.name }`);
  }

  addInternalScript() {
    let scriptTag = document.createElement('script')
    document.body.appendChild(scriptTag);

    scriptTag.innerHTML = `
      // ${ myApp.getJSON().global.htmlComment }
    `;

    myApp.setJson('notes', myApp.guid(), `{ "type": "general", "name": "Internal Script", "value": "Added to HTML: Scripts" }`);
  }

  addInternalCSS() {
    let cssTag = document.createElement('style')
    document.head.appendChild(cssTag);

    cssTag.innerHTML = `
      // ${ myApp.getJSON().global.htmlComment }
      body {}
    `;

    myApp.setJson('notes', myApp.guid(), `{ "type": "general", "name": "Internal CSS", "value": "Added to HTML: Internal CSS" }`);
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
    // // iterator
    
    // get files section from json data
    // at this time i am unable to figure out how to filter the json for files that are tagged as active. currently i get full files section, convert to array then filter array.
    let xExternalFiles = myApp.getJSON().files;
    // convert returned json to array
    xExternalFiles = Object.keys((xExternalFiles)).map((item) => { return xExternalFiles[item] });
    // filter array for items that are listed as active
    xExternalFiles = xExternalFiles.filter(item => item.active === true);

    let xIterator = (xArray) => {

      let xCount = -1;
      let xReturnValue = '';
      let xComment = '';

      return {
        next: () => {
          
          xCount++;

          xReturnValue = `Added To HTML: ${xArray[xCount].name} ${xArray[xCount].type}`;
          
          xComment = document.createComment(`${xArray[xCount].name} ${ myApp.getJSON().global.htmlComment }`);

          document.head.appendChild(xComment);

          document.head.appendChild(this.addToHTML(xArray[xCount].url, xArray[xCount].tag, xArray[xCount].type));
  
          return xCount < xArray.length ? 
            { value: xReturnValue, done: false } : 
            { value: undefinded, done: true };
        }

      };

    };

    let xIteratorSearch = xIterator(xExternalFiles);
    
    for(let item of xExternalFiles) {
      // console.log(x_iteratorSearch.next()); // iterator
      myApp.setJson('notes', myApp.guid(), `{
        "type": "general", 
        "name": "${ item.name }", 
        "value": "${ xIteratorSearch.next().value }" }`);
    };
  }

  // end of class
}