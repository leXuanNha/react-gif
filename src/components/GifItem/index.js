import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./styles";

const GifItem = ({ data }) => {
  const classes = useStyles();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'unset';
  }, [selected])

  const {
    images,
    slug,
    user,
  } = data;

  const onToggleSelectImage = () => {
    setSelected(!selected);
  }

  return (
    <div>
      <Card className={classes.root}>
        <img
          className={classes.image}
          src={images.downsized.url}
          alt={slug}
          onClick={onToggleSelectImage}
        />

        <div className={classes.actions}>
          <div>
            <LinkIcon />
          </div>
          <div className={classes.interactive}>
            <div>
              <VisibilityIcon />
              <span>900</span>
            </div>
            <div>
              <ChatBubbleIcon />
              <span>12</span>
            </div>
            <div>
              <FavoriteIcon />
              <span>345</span>
            </div>
          </div>
        </div>
      </Card>

      {user && (
        <div className={classes.userInfo}>
          <img className={classes.avatar} src={user.avatar_url} alt={user.username} />
          <span className={classes.userName}>{user.display_name}</span>
        </div>
      )}

      {selected && (
        <div className={classes.modalView}>
          <div className={classes.faded} />
          <CloseIcon className={classes.closeIcon} onClick={onToggleSelectImage} />
          <img className={classes.modalImage} src={images.original.url} alt={`${slug}-full-screen`} />
        </div>
      )}
    </div>
  );
};

GifItem.propTypes = {
  data: PropTypes.shape({}),
};

GifItem.defaultProps = {
  data: {},
};

export default GifItem;
