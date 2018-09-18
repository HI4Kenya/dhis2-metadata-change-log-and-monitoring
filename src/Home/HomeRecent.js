/**
 * Metadata Audit  Copyright (C) 2018  University of Nairobi Health IT
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';

import { Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  /**
   * const: styles = func: theme()
   * 
   * css for the component being rendered
   */
  root: {
    margin: theme.spacing.unit,
  },
  title: {
    padding: theme.spacing.unit*2,
  },
});

class HomeRecent extends React.Component {
  /**
   * func: render()
   */
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <div className={classes.title}>
            <Typography variant="title">Recent</Typography>
          </div>

          { /* your render code will go here  */}

        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(HomeRecent);
