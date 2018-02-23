import React, { Component } from 'react';
import Form from '../../components/Form';
import { submitNewBike } from '../../api'
import './styles.css';

class Create extends Component {

  submit = submitObj => {
    submitNewBike(submitObj).then(data =>{
      if(data.status === 500){
          alert('Some thing went wrong...');
      } else {
          this.props.goTo('/product', data);
      }
    }).catch(err => {
          alert('Life is good...')

      console.log('Error ', err);
    });
  };

  render() {

    return(
      <div className='created-wrapper'>
        <h2>Add new item</h2>
        <Form
          submit = { (submitObj) => this.submit(submitObj) }
        />
      </div>
    )

  }
}

export default Create;