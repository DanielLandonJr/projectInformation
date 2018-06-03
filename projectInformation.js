const Utils_CTRL = (() => {
  
  // public methods
  return {
    guid: () => {
      const s4 = () => Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    }
  }
})();

const JSON_Ctrl = (() => {
  // this is json, data will be added so that it can be used in the project
  let jsonData = {
    "global": {
      "applicationTitle": "Project Information",
      "copyRight": "by Daniel C Landon Jr &copy; 2018",
      "htmlComment": "injected by projectInformaton.js" },
    "sections": {  },
    "notes": {  },
    "files": {  }
  };

  const addExternalFiles = () => {
    // array of external references that may be added to the jsonData. did it this way so that i can demonstrate adding an array to json.
    // format: { "name": "name", "active": true or false, "type": "css or js", "tag": "link or script", "regex": "regex", "website": "website", "url": "url" }
    let externalFiles = [
      { "name": "jQuery", "active": true, "type": "js", "tag": "script", "regex": "jquery", "website": "https://jquery.com/", "url": "https://code.jquery.com/jquery-3.3.1.min.js" },
      { "name": "WingCSS", "active": false, "type": "css", "tag": "link", "regex": "wingcss", "website": "http://usewing.ml/", "url": "https://unpkg.com/wingcss@1.0.0-beta/dist/wing.min.css" },
      { "name": "Normalize", "active": false, "type": "css", "tag": "link", "regex": "normalize.css", "website": "https://necolas.github.io/normalize.css/", "url": "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css" },
      { "name": "Skeleton", "active": false, "type": "css", "tag": "link", "regex": "skeleton.min.css", "website": "http://getskeleton.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" },       
      { "name": "MaterialJS", "active": true, "type": "js", "tag": "script", "regex": "materialize.min.js", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" },
      { "name": "MaterialCSS", "active": true, "type": "css", "tag": "link", "regex": "materialize.min.css", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" },
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

    for (let index = 0; index < externalFiles.length; index++) {
      let xTemp = `{ 
        "name": "${ externalFiles[index].name }", 
        "active": ${ externalFiles[index].active }, 
        "type": "${ externalFiles[index].type }", 
        "tag": "${ externalFiles[index].tag }", 
        "regex": "${ externalFiles[index].regex }", 
        "website": "${ externalFiles[index].website }", 
        "url": "${ externalFiles[index].url }" 
      }`;

      JSON_Ctrl.setJSONData('files', Utils_CTRL.guid(), xTemp);
    }
  };

  const addSectionDataToJSON = () => {
    // format : { "title": "Section 1 Title", "heading": "section 1 heading", "titleText": "section 1 title text" }
    let sectionData = [ ];

    for (let index = 0; index < sectionData.length; index++) {
      let xTemp = `{ 
        "title": "${ sectionData[index].title }", 
        "heading": "${ sectionData[index].heading }", 
        "titleText": "${ sectionData[index].titleText }" 
      }`;

      JSON_Ctrl.setJSONData('sections', Utils_CTRL.guid(), xTemp);
    }
  }

  return {
    initializeData: () => {
      // initialize the json data
      addExternalFiles();
      addSectionDataToJSON();
    },
    getJSONData: () => {
      return jsonData;
    },
    setJSONData: (section, name, data) => {
      section = String(section).toLowerCase();

      switch(section) {
        case 'global':
          jsonData.global[name] = JSON.parse(data);
          break;
        case 'sections':
          jsonData.sections[name] = JSON.parse(data);
          break;
        case 'notes':
          jsonData.notes[name] = JSON.parse(data);
          break;
        case 'files':
          jsonData.files[name] = JSON.parse(data);
          break;
      };
    }
  }
})();

const UI_Ctrl = (() => {

  // public methods
  return {
    addModal: () => {
      console.log(`TODO: ${ UI_Ctrl.addModal.name }`);
    },
    addShowModalButton: () => {
      console.log(`TODO: ${ UI_Ctrl.addShowModalButton.name }`);
    }
  }
})();

const HTML_Ctrl = (() => {
  const compareFiles = (url, regex) => {
    // compare the url to the regex value
    
    let xTemp = RegExp(xRegEx, 'i');

    if(xTemp.test(xLink)) { return true } else { return false};
  };

  const createHTMLTag = (url, tag, type) => {
    // crates tags and add to html

    let link = document.createElement(tag);

    switch (String(type).toLowerCase()) {
      case 'css':
        link.href = url;
        link.rel = 'stylesheet';
        break;
      case 'js':
        link.src = url;
        break;
    }

    return link;
  };

  // public methods
  return {
    addExternalFiles: () => {
      // get json data, only want files section
      let extFiles = JSON_Ctrl.getJSONData().files;
      // convert json to array
      extFiles = Object.keys((extFiles)).map((item) => { return extFiles[item] });
      // filter array for active items only
      extFiles = extFiles.filter(item => item.active === true);

      console.log(extFiles);

      // create an iterator and add files to html
      let xIterator = (xArray) => {
        let xCount = 0;
        let xReturnValue = '';
        let xComment = '';

        return {
          next: () => {
            debugger
            xCount++; // increment the counter

            xReturnValue = `
              Added To HTML: 
              ${ xArray[xCount].name } 
              ${ xArray[xCount].type }
            `;

            xComment = document.createComment(`
              ${ xArray[xCount].name } 
              ${ JSON_Ctrl.getJSONData().global.htmlComment }
            `);

            // append the comment to the head just above the new file
            document.head.appendChild(xComment);

            // add tag to html
            document.head.appendChild(createHTMLTag(xArray[xCount].url, xArray[xCount].tag, xArray[xCount].type));

            return xCount < xArray.length ? 
            { value: xReturnValue, done: false } :{ value: undefined, done: true };
          }
        };
      };

      let xIteratorItem = xIterator(extFiles);
      
      for(let item of extFiles) {
        console.log(xIteratorItem.next());
        JSON_Ctrl.setJSONData('notes', Utils_CTRL.guid(), `{
          "type": "general", 
          "name": "${ item.name }",
          "value": "${ xIteratorItem.next() }"
        }`);
      };

      console.log(JSON_Ctrl.getJSONData());
    },
    addCSS: () => {
      let cssTag = document.createElement('style')
      document.head.appendChild(cssTag);
  
      cssTag.innerHTML = `
        // ${ JSON_Ctrl.getJSONData().global.htmlComment }
      `;
  
      JSON_Ctrl.setJSONData('notes', Utils_CTRL.guid(), `{ 
        "type": "general", 
        "name": "Internal CSS", 
        "value": "Added to HTML: Internal CSS" 
      }`);
    },
    addScript: () => {
      let scriptTag = document.createElement('script')
      document.body.appendChild(scriptTag);
  
      scriptTag.innerHTML = `
        // ${ JSON_Ctrl.getJSONData().global.htmlComment }
      `;
  
      JSON_Ctrl.setJSONData('notes', Utils_CTRL.guid(), `{ 
        "type": "general", 
        "name": "Internal Script", 
        "value": "Added to HTML: Internal Scripts" 
      }`);
    },
    addEventListeners: () => {
      console.log(`TODO: ${ HTML_Ctrl.addEventListeners.name }`);
    },
    addToast: () => {
      console.log(`TODO: ${ HTML_Ctrl.addToast.name }`);
    }
  }
})();

const ProjectInformation = (() => {
  document.addEventListener('DOMContentLoaded', function() { 
    // dom load
  });

  // public methods
  return {
    init: () => {
      const startTime = parseFloat(performance.now());
    
      JSON_Ctrl.initializeData();

      HTML_Ctrl.addExternalFiles();
      HTML_Ctrl.addCSS();
      HTML_Ctrl.addScript();

      UI_Ctrl.addModal();
      UI_Ctrl.addShowModalButton();

      HTML_Ctrl.addToast();

      console.log(JSON_Ctrl.getJSONData());
      
      console.warn('LOADED projectInformation.js: ' + (performance.now() - startTime).toFixed(2) + 'ms'); 
    }
  }
})();

ProjectInformation.init();