/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


///////////////////////////////////////////////////////////////////////////
// Facebook
///////////////////////////////////////////////////////////////////////////

console.log($.cookie('fb_id') );
console.log($.cookie('fb_access_token') );

window.fbAsyncInit = function() {
  console.log('fbAsyncInit');
  
  FB.init({
    appId      : '1487237978203661',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,
    version    : 'v2.1',
    status     : true
  });
  
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
    } else {
      FB.login();
    }
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }
  (document, 'script', 'facebook-jssdk')
);

///////////////////////////////////////////////////////////////////////////
// Event Handlers
///////////////////////////////////////////////////////////////////////////

$(document).on('click', 'button#add-collaborator', function() {
  $('#modal-collaborator-list').html('<li class="loading-message">Fetching Facebook data...</li>');
  
  // Grab all the existing collaborator's IDs
  var existingCollaborators = $('#collaborator-list .collaborator-id').map(function(){ 
     return $(this).val();
  });
  
  // Make a call to Facebook
  FB.api("/me?fields=id,name,friends", function(response){
    $('#modal-collaborator-list .loading-message').hide();
    if(response.friends.data.length > existingCollaborators.length) {
      $.each(response.friends.data, function( index, value ) {
        // Don't add existing collaborators
        if ($.inArray(value.id, existingCollaborators) == -1) {
          var pictureSrc = "http://graph.facebook.com/" + value.id + "/picture?type=square&width=50&height=50";
          var html = $('[data-template="collaborator"]').clone();
          html.removeAttr('data-template');
          html.find('.collaborator-id').val(value.id);
          html.find('.collaborator-name').text(value.name);     
          html.find('.collaborator-picture').attr("src", pictureSrc);
          $('#modal-collaborator-list').append(html);
        }
      });
    } else {
      $('#modal-collaborator-list').html('<li>No collaborators found :(</li>');
    }
  });
});

$(document).on('click','#add-friend-submit', function() {
  //for each checked item, append to friends
  $('#add-collaborators :checked').each(function() {
    var collaborator = $(this).closest('li');
    $("#collaborator-list").append(collaborator);
    
    // TODO: an ajax call to associate collaborator with the list
    // something like:
    //
    //  $.ajax 
    //    url: 'some/url',
    //    method: 'post',
    //    data: { id: collaborator.find('.collaborator-id').val() },
    //    success: function(data) {
    //      console.log('data: ', data);
    //      $("#collaborator-list").append(collaborator);
    //    }
  });
    
});
  
$(document).on('click','.collaborator-delete', function () {
  var collaborator = $(this).closest('li');  
  var result = confirm("Are you sure you want to remove this collaborator from the current list?");

  if(result==true) {
    $(this).closest('li').remove();
    
    // TODO: an ajax call to disassociate collaborator with the list
    // something like:
    //
    //  $.ajax 
    //    url: 'some/url',
    //    method: 'post',
    //    data: { id: collaborator.find('.collaborator-id').val() },
    //    success: function(data) {
    //      console.log('data: ', data);
    //      $("#collaborator-list").append(collaborator);
    //    }
  }
});

