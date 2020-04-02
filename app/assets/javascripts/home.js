$(function() {
	$('#show_heading').click(function() {
	  var error, value;
	  value = $('#json_input').val();
	  error = 'please provide formatted input';
	  if (value === '') {
	    alert(error);
	    return;
	  }
	  $.ajax({
	    url: '/home/create',
	    type: 'post',
	    data: {
	      json_input: value
	    },
	    success: function(data) {
	      if (data['view'] === 'error') {
	        alert(error);
	      } else {
	        document.getElementById('show_data').innerHTML += data['view'];
	      }
	    }
	  });
	});

	$('#clear').click(function() {
	  document.getElementById('show_data').innerHTML = '';
	});
});