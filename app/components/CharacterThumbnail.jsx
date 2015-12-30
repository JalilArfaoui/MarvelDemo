import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import {Button,ButtonGroup,Image, Glyphicon} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class CharacterThumbnail extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    character: React.PropTypes.object.isRequired
  };

  render() {
    let wikiUrl       = (this.props.character.urls.length > 1 ? this.props.character.urls[1].url : "");
    let comicLinkUrl  = (this.props.character.urls.length > 2 ? this.props.character.urls[2].url : "");
    // TODO: Il faudrait repérer le type de l'url plutôt que de se fier à l'ordre

    let detailButton = (
      <LinkContainer to={`/hero/${this.props.id}`} >
        <Button bsStyle="primary" bsSize="xsmall">
          <Glyphicon glyph="list-alt" /> D&eacute;tail
        </Button>
      </LinkContainer>

    );
    let wikiButton = (wikiUrl ? (
      <Button bsSize="xsmall" href={wikiUrl} target="_blank" >
        <Glyphicon glyph="globe" /> Wiki
      </Button>
    ) : "");

    let comicLinkButton = (comicLinkUrl ? (
      <Button bsSize="xsmall" href={comicLinkUrl} target="_blank" >
        <Glyphicon glyph="book" /> ComicLink
      </Button>
    ) : "");

    return (
      <Link to={`/hero/${this.props.id}`} >
        <div className="CharacterThumbnail">
          <div className="ImageCrop">
            <Image thumbnail height="200" src={this.props.character.thumbnail.path+"."+this.props.character.thumbnail.extension} />
          </div>
          <h2>{this.props.character.name}</h2>
          <div className="ActionBar">
            <ButtonGroup>
              {detailButton}
              {wikiButton}
              {comicLinkButton}
            </ButtonGroup>
          </div>
        </div>
      </Link>
    );
  }
}