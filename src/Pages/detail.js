import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';


class DetailPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

  }

  componentDidMount() {
      const  id = this.props.match.params.id
      const url = `https://reqres.in/api/users/${id}`;

  fetch(url,{
  method: 'GET', 
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => this.setState({ user: data.data }));

}


  render() {
    const { user } = this.state;
    return (
      <div>
        <table>
          <tr>
            <td>Name: {user.first_name}</td>
            <td>Email:{user.email}</td>
          </tr>
        </table>
        
        
                  <Link className="btnlg" type="submit" to="/">Back</Link>

      </div>

    );
  }


}
export default DetailPage;
