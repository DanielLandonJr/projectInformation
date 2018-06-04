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
      { "name": "jQuery", "active": false, "type": "js", "tag": "script", "regex": "jquery-3.3.1.min.js", "website": "https://jquery.com/", "url": "https://code.jquery.com/jquery-3.3.1.min.js" },
      { "name": "WingCSS", "active": false, "type": "css", "tag": "link", "regex": "wingcss", "website": "http://usewing.ml/", "url": "https://unpkg.com/wingcss@1.0.0-beta/dist/wing.min.css" },
      { "name": "Normalize", "active": false, "type": "css", "tag": "link", "regex": "normalize.css", "website": "https://necolas.github.io/normalize.css/", "url": "https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css" },
      { "name": "Skeleton", "active": false, "type": "css", "tag": "link", "regex": "skeleton.min.css", "website": "http://getskeleton.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" },       
      { "name": "MaterialJS", "active": false, "type": "js", "tag": "script", "regex": "materialize/1.0.0-beta", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" },
      { "name": "MaterialCSS", "active": false, "type": "css", "tag": "link", "regex": "materialize/1.0.0-beta", "website": "http://materializecss.com/", "url": "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" },
      { "name": "Material+Icons", "active": false, "type": "css", "tag": "link", "regex": "icons", "website": "https://material.io/icons/", "url": "https://fonts.googleapis.com/icon?family=Material+Icons" },
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
      
      let divModal = document.createElement('div');
      // let divContent = document.createElement('div');

      divModal.id = 'p-info-modal1';
      divModal.classList.add('modal');

      let divHeader = document.createElement('div');
      let divFooter = document.createElement('div');
      let divLecture = document.createElement('div');
      let divNotes = document.createElement('div');

      divModal.appendChild(divHeader);divModal.appendChild(divLecture);divModal.appendChild(divNotes);divModal.appendChild(divFooter);

      


      // divContent.classList.add('modal-content');
      // divModal.innerHTML = `
      //   <!-- Modal Structure -->
      //     <div class="modal-content">
      //       <h4>Modal Header</h4>
      //       <p>A bunch of text</p>
      //     </div>
      //     <div class="modal-footer">
      //       <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      //     </div>
      // `;
      // div.style = style;
      // div.title = `Show Project Information`;

      document.body.insertBefore(divModal, document.body.firstChild);
    
    },
    addShowModalButton: () => {
      let style = '';
      let div = document.createElement('div');

      style = `position: fixed; bottom: 0; right: 0; margin: 0em .5em 0em 0em; font-size: 1.5em; cursor: pointer;`;

      div.id = 'p-show-modal';
      div.innerHTML = `<a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#p-info-modal1"><i class="material-icons">add</i></a>
      `;
      div.style = style;
      div.title = `Show Project Information`;

      document.body.insertBefore(div, document.body.firstChild);
    }
  }
})();

const HTML_Ctrl = (() => {
  const compareFiles = (url, regex) => {
    // compare the url to the regex value
    
    regex = regex.toLowerCase();

    let xTemp = RegExp(regex, 'i');

    url = url.toLowerCase();

    if(xTemp.test(url.toLowerCase())) { return true } else { return false};
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
      let addToHTML = true;
      let xTempArray = '';
      let xTag = '';
      // get json data, only want files section
      let extFiles = JSON_Ctrl.getJSONData().files;
      // convert json to array
      extFiles = Object.keys((extFiles)).map((item) => { return extFiles[item] });
      // filter array for active items only
      extFiles = extFiles.filter(item => item.active === true);
      
      extFiles.forEach(element => {
        addToHTML = true;
        
        xTempArray = document.querySelectorAll(element.tag);
        
        xTempArray.forEach(item => {   
          switch(element.tag.toLowerCase()) {
            case 'link':
              xTag = item.href;
              break;
            case 'script':
              xTag = item.src;
              break;
          };

          // links found loop through them looking for a html
          if (compareFiles(xTag, element.regex)) {
            // yes reference already exists
            xReturnValue = `NOT Added To HTML (already exists): ${ element.name }`;
            // do not add to html
            addToHTML = false;
          };
        });
        
        if (addToHTML) {
          xReturnValue = `Added To HTML: ${ element.name } ${ element.type }`;
  
          xComment = document.createComment(`${ element.name } ${ JSON_Ctrl.getJSONData().global.htmlComment }`);
  
          // append the comment to the head just above the new file
          document.head.appendChild(xComment);
  
          // add tag to html
          document.head.appendChild(createHTMLTag(element.url, element.tag, element.type));
        }
        
        JSON_Ctrl.setJSONData('notes', Utils_CTRL.guid(), `{
          "type": "general",
          "name": "${ element.name  }",
          "value": "${ xReturnValue }"
        }`);
      });
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

        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.modal');
          var instances = M.Modal.init(elems);

          M.toast({html: 'Project Information Loaded!!!', classes: 'rounded'});
        });
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

      // console.log(JSON_Ctrl.getJSONData());
      
      console.warn('LOADED projectInformation.js: ' + (performance.now() - startTime).toFixed(2) + 'ms'); 
    }
  }
})();

ProjectInformation.init();