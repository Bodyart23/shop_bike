// import React, {Component} from 'react';
// import {getSearchCount} from "../../api";
//
// class Search extends Component{
//     searchBtnHandler = (countSerch) => {
//         this.setState({
//             loading: true
//         });
//         const {count} = this.state;
//         if (this.searchInput.value === '') {
//             alert('Fill in the field');
//             this.setState({
//                 loading: false
//             });
//             return;
//         }
//         getSearchCount(this.searchInput.value, countSerch ? countSerch : 0).then(data => {
//             this.setState({
//                 searchResult: data,
//                 data: null,
//                 loading: false,
//                 count: countSerch ? count + 1 : 0
//             });
//         }).catch(err => {
//             this.setState({
//                 loading: false
//             });
//             console.log('error', err);
//         });
//     };
//     render(){
//         return(
//             <div>
//                 <input
//                     className="rounded"
//                     type="text"
//                     placeholder='Enter searching item...'
//                     ref={(input) => this.searchInput = input}
//                 />
//                 <button
//                     className="button-search"
//                     onClick={() => this.searchBtnHandler()}
//                 >Search
//                 </button>
//             </div>
//         );
//     }
// }
// export default Search;