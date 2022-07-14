import React from 'react';

const ShowEntry = ({ taskValue, onDelete }) => {
  return (
    <div className='show_entry'>
      <div className='list_wrapper'>
        <h1>Entries</h1>
        <div className='list_leaderBoard'>
          <div className='list_leaderItem'>#1 Malta(26)</div>
          <div className='list_leaderItem'>#2 Sonfee(26)</div>
          <div className='list_leaderItem'>#3 Santra(26)</div>
        </div>
        <div className='list_row'>
          <div className='list_row_item'>Name</div>
          <div className='list_row_item'>Cocktail</div>
          <div className='list_row_item'>Points Given</div>
          <div className='list_row_item'>Action</div>
        </div>
        <div className='table'>
          {!taskValue === [] ? (
            taskValue.map((task) => {
              const { name, cocktail, points, id } = task;
              return (
                <div className='list_group' key={id}>
                  <div className='table_item'>{name}</div>
                  <div className='table_item'>{cocktail}</div>
                  <div className='table_item'>{points}</div>
                  <div className='table_item table_action'>
                    <button className='btn'>Edit</button>
                    <button className='btn' onClick={() => onDelete(id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: 'center' }}>No Data To Show</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowEntry;

// <table className='table'>

//     <tr>
//       <td className='table_item'>eee</td>
//       <td className='table_item'>Malta</td>
//       <td className='table_item'>9</td>
//       <td className='table_action'>
//         <button>Edit</button>
//         <button>Delete</button>
//       </td>
//     </tr>
// </table>
