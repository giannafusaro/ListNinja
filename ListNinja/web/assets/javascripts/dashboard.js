/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

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
    console.log("add-friend-submit clicked!");
  //for each checked item, append to friends
  $('#add-collaborators :checked').each(function() {
    var collaborator = $(this).closest('li');
    var collaborator_id = collaborator.find(".collaborator-id");
    
    //add to database
    con.listCon.addUserToList(view.selectedList, collaborator_id.val());
    
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
    var collaborator_id = collaborator.find(".collaborator-id");
    con.listCon.removeUserFromList(view.selectedList, collaborator_id);
    
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

