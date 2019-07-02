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

  $("#update").click( function() {
    var _old = $("#old").val(),
        _new = $("#new").val(),
        json = true;
    try {
      _old = JSON.parse(_old);
      _new = JSON.parse(_new);
    } catch (e) {
      json = false;
    }
    if (json) {
      for (var k of Object.keys(_new)) {
        v = _old[k];
        if (typeof(v) == 'string')
        {
          _new[k] = v;
        }
      }
      _new = JSON.stringify(_new, null, 1);
    } else {
      var ks = listKeys(_new);
      for ( i in ks ) {
        var v = get( _old, ks[i] );
        if (v) {
          _new = set( _new, ks[i], v )
        }
      }
    }
    $("#new").val(_new)
  })
} )
