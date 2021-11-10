import * as React from 'react';

export default class TableComponent extends React.Component{
    constructor(props) {
        super(props);
      }

      render() {
            const defItems = this.props.definitionProperties.map((elems) => <p>{elems}</p>);
            const symItems = this.props.synonymProperties.map((elems) => <p>{elems}</p>);
            return(
                <div>
                    <div>
                    <table id="ontologies">
                    <tr>
                        <th>Ontology Id</th>
                        <td>{this.props.ontologyId}</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>{this.props.title}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{this.props.description}</td>
                    </tr>
                    <tr>
                        <th>Definition Properties</th>
                        <td>{defItems}</td>
                    </tr>
                    <tr>
                        <th>Synonym Properties</th>
                        <td>{symItems}</td>
                    </tr>
                    </table>
                    </div>
                </div>
            );
  }
}