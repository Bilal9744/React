// import React, { Component } from 'react';

// class Form extends Component {
//     constructor(props) {
//         super(props);

//         this.state ={
//             username: '',
//             comments:'',
//             Topic:'React'
        
//         }
//     }
//     handleUsernamechange = event => {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     handleCommentchange = event => {
//         this.setState({
//             comments: event.target.value
//         })
//     }

//     handleTopicchange = event => {
//         this.setState({
//             Topic:event.target.value
//          })
//     }

//     handleSubmit = event => {
//         alert()
//     }
//     }
    
//     render() {
//         return (
//          <form onSubmit={this.handleSubmit}>
//              <div>
//                 <label>Username</label>
//                 <input type='text' value={this.state.username} onChange={this.handleUsernamechange}></input>
//                 </div>
//                 <div>
//                 <label>Comments</label>
//                 <textarea value={this.state.comments} onChange={this.handleCommentchange}></textarea>
//             </div>
//             <div>
//                 <label>Topic</label>
//                 <select value={this.state.Topic} onChange={this.handleTopicchange}>
//                     <option value="React">React</option>
//                     <option value="Angular">Angular</option>
//                     <option value="Vue">Vue</option>
//                      </select>
//             </div>
//             <div>
//                 <button type='submit'>Submit</button>
//             </div>
//          </form>
//         )
//     }
// }


// export default Form;