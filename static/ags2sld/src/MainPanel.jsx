import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AgsMap from './AgsMap';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function MainPanel(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Ags2Sld
        </Typography>
        <Typography component="p">
          ArcGIS Server to Style Layer Descriptor (SLD) Convertor
        </Typography>
        <AgsMap/>
      </Paper>
    </div>
  );
}

MainPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPanel);