import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import LinkIcon from '@material-ui/icons/Link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from "./styles";

const GifItem = ({ data }) => {
  const classes = useStyles();

  const {
    images,
    slug,
    user,
  } = data;

  return (
    <div>
      <Card className={classes.root}>
        <img className={classes.image} src={images.downsized.url} alt={slug} />

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
