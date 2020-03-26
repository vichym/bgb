import React from 'react';
import { Table } from 'reactstrap';
import Context from '../Context'


function LiveClients (props) {

    const renderTable = () => {
        return props.clients.map(
            (data, index) =>
                <tr key={data._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.city}</td>
                    <td>{data.region}</td>
                    <td>{data.country}</td>
                    <td>{data.continent}</td>
                </tr>
        )
    }   
        return (
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>City</th>
                            <th>Region</th>
                            <th>Country</th>
                            <th>Continent</th>
                        </tr>
                    </thead>

                    <tbody>
                        {renderTable()}
                    </tbody>
                </Table>
            </div>
        );

}


const LiverVisitor = props => (
    <Context.Consumer>
    {clients => <LiveClients {...props} clients={clients} />}
    </Context.Consumer>
  )
    

export default LiverVisitor



