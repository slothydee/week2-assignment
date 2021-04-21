import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
    static propTypes = {
        postedDate: PropTypes.string,
        minutesToRead: PropTypes.number,
        author: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            isMediumMember: PropTypes.bool
        })
    }

    render() {

        return (
            <table>
                <tbody>
                    <tr>
                        <td className="column">
                        <a href={this.props.author.image}><img alt={this.props.author.name} src={this.props.author.image} ></img></a>
                        </td>
                        <td className="column">
                            {this.props.author.name}
                        </td>
                        <td className="column">
                            {this.props.postedDate}
                        </td>
                        <td className="column">
                            {this.props.minutesToRead} min read
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Author;