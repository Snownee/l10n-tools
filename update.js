jQuery(document).ready( function($) {
  console.log("Author: Snownee\nLicense: MIT");
  
  function get(str, k) {
    str = str.match( new RegExp("^"+k+"=(.*)$", "m") );
    return str === null ? false : str[1]
  }

  function set(str, k, v) {
    return str.replace( new RegExp("^"+k+"=.*$", "m"), k+"="+v )
  }

  function listKeys(str) {
    return str.match( /^.+?(?==)/gm )
  }

  function readFile() {
    var fso = new ActiveXObject(Scripting.FileSystemObject),
        f = fso.opentextfile("C:\a.txt", 1, true);
  }

            var getActiveXObject ,getFile,someMessage;
             getAXO = new ActiveXObject("Scripting.FileSystemObject");
            getF = getAXO.GetFile("C:\\bootbak.ini");
            someMessage = "FileName:" + getF.Name   + "Filesize:" + getF.size + " bytes.";
     if(getF.size > 500)
     {
     alert(s);
     }
     else
     {
     alert("This file's size is small!");
     }

  $("#update").click( function() {
    var _old = $("#old").val(),
        _new = $("#new").val(),
        ks = listKeys(_new);
    for ( i in ks ) {
      var v = get( _old, ks[i] );
      if (v) {
        _new = set( _new, ks[i], v )
      }
    }
    $("#new").val(_new)
  })
} )