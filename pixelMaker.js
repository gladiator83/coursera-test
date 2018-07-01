var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
// testing my height & width .console.log('height:' + height + ' width: '+ width);
})
//lets call the makeGrid function below using jQuery still.
function makeGrid(height, width) {//takes the width and height input from the user
      $('tr').remove(); //remove previous table if any
      for(var i =1; i<=width;i++){
          $('#pixelCanvas').append('<tr id = table' + i + '></tr>');//the tableid plus table data
          for (var j =1; j <=height; j++){
            $('#table' + i).append('<td></td');
          }

      }
  //getting more interesting with adding color
      $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')){
          $(this).removeAttr('style')
        } else {
          $(this).attr('style', 'background-color:' + color);
        }
      })

}
