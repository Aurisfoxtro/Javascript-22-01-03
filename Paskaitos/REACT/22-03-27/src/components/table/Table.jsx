function Table(props) {

    const rows = props.dimensions.rows;
    const columns = props.dimensions.columns;

    let slice = ''

    for(let i = 0; i < rows; i++){
      slice += '<tr>'
      for(let j = 0; j < columns; j++){
        slice += '<td></td>'
      }
      slice += '</tr>'
    }
   
    // document.getElementById('main').innerHTML = slice;

    return (
      <>
        <table id = 'main'>
          {slice}
        </table>
      </>
    );
  }
  
  export default Table;