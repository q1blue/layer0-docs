import {FormControl, MenuItem, Select} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Router, {useRouter} from 'next/router';
import React, {useEffect} from 'react';

import useVersioning, {getVersions} from '../../versioning';

const useStyles = makeStyles((theme) => ({
  control: {
    '& > div': {
      borderRadius: 3,
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(-1.5),
    },
    flexShrink: 0,
  },
  selectMenu: {
    textOverflow: 'clip',
  },
  icon: {
    color: theme.palette.grey[200],
  },
  selectRoot: {
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    border: 0,
    padding: theme.spacing(1, 2),
    fontSize: '1.00em',
    color: theme.palette.grey[200],
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
  },
}));

export default function VersionChooser() {
  const classes = useStyles();
  const {route} = useRouter();
  const {currentVersion, setCurrentVersion, createUrl, versions, setVersions} =
    useVersioning();

  useEffect(() => {
    const doGetVersions = async () => {
      const versions = await getVersions();

      setVersions(versions);
    };

    doGetVersions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event: any) => {
    let version = event.target?.value;

    Router.push(route, createUrl({version, forceVersion: true}));
    setCurrentVersion(version);
  };

  // don't render unless we are on the api docs route
  if (/*!route.startsWith('/docs/') ||*/ !versions.length) {
    return <></>;
  }

  const selectedVersion =
    currentVersion === 'current' ? versions[0] : currentVersion;

  return (
    <FormControl variant="filled" className={classes.control} size="small">
      <Select
        value={selectedVersion}
        onChange={onChange}
        disableUnderline
        autoWidth
        classes={{
          root: classes.selectRoot,
          icon: classes.icon,
          selectMenu: classes.selectMenu,
        }}>
        {versions.map((version: string) => (
          <MenuItem value={version} key={version}>
            {version}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
