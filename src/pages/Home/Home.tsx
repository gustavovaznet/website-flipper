//HOME

//IMPORTING
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme as AugmentedTheme, createStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import GotoIcon from '@material-ui/icons/KeyboardArrowRight';
import WebIcon from '@material-ui/icons/Web';
import HttpsIcon from '@material-ui/icons/Https';
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PowerIcon from '@material-ui/icons/FlashOn';
import CodeIcon from '@material-ui/icons/Code';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import bigLogo from '../../assets/big-logo.png';

//FEATURES
const features = [
  {
    title: 'Simple',
    subtitles: [
      'Flipper is a very simple framework css, transform your application into a master piece with a few clicks.',
    ],
    icon: CodeIcon,
  },
  {
    title: 'Fast',
    subtitles: [
      "Size matters! That's why our library use none of third-party dependencies.",
    ],
    icon: PowerIcon,
  },
  {
    title: 'Responsivity',
    subtitles: [
      '100% responsive! All components are responsives for any screen size.',
    ],
    icon: WebIcon,
  },
  {
    title: 'Secure',
    subtitles: [
      'All the components were developed carefully to make sure that there are not any bugs in our framework code.',
    ],
    icon: HttpsIcon,
  },
  {
    title: 'Store',
    subtitles: [
      'We wanted to make store that is flexible, scalable and configurable.',
    ],
    icon: SaveIcon,
  },
  {
    title: 'Forms',
    subtitles: [
      'Our library provide tools for handling different types of validation, so you can code less on focus more on your logic.',
    ],
    icon: VisibilityIcon,
  },
];

//STYLES
const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      marginTop: theme.marginFromMainNav,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.marginFromMainNavMobile,
      },
    },
    pageTitle: {
      textAlign: 'center',
      color: '#8FBC8F',
    },
    pageTitle2: {
      textAlign: 'center',
      width: '35%',
      margin: '0 auto',
      marginTop: theme.spacing(7.5),
      color: '#8FBC8F',
      '&::before': {
        right: 10,
      },
      '&::after': {
        left: 10,
      },
      '&::before, &::after': {
        backgroundColor: '#8FBC8F',
        content: '""',
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle',
        height: 1,
        width: '35%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        '&::before, &::after': {
          width: '25%',
        },
      },
    },
    pageSubtitle: {
      textAlign: 'center',
      color: theme.colors.textColors.light,
    },
    featureItem: {
      minHeight: 230,
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    featureText: {
      color: theme.colors.textColors.light,
    },
    featureIcon: {
      width: '100%',
      fontSize: 50,
      color: '#8FBC8F',
    },
    infoText: {
      marginTop: theme.spacing(3),
      color: '#8FBC8F',
    },
    bigLogo: {
      display: 'block',
      margin: '0 auto',
      width: 300,
      height: 'auto',
    },
    introBtnsContainer: {
      width: '40%',
      margin: 'auto',
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    featuresContainer: {
      width: '80%',
      margin: 'auto',
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    introBtnItem: {
      display: 'flex',
      justifyContent: 'center',
    },
    introLink: {
      width: '100%',
      textDecoration: 'none',
    },
    getStartedBtn: {
      backgroundColor: '#8FBC8F',
      color: theme.colors.textColors.dark,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#696969',
      },
    },
    docsBtn: {
      color: theme.colors.textColors.light,
      textTransform: 'capitalize',
    },
  })
);

//HOME STYLES
const Home = () => {
  const classes = useStyles();
  return (
    <Fade in timeout={500}>
      <div className={classes.root}>
        <Typography
          className={classes.pageTitle}
          variant="h2"
          component="div"
          noWrap
        >
          Your CSS Framework
        </Typography>
        <Typography
          className={classes.pageSubtitle}
          variant="subtitle1"
          component="div"
          gutterBottom
        >
          Create your own world in CSS using the best Framework in the world!
        </Typography>
        <Grid container className={classes.introBtnsContainer} spacing={2}>
          <Grid className={classes.introBtnItem} item xs={12} sm={12}>
            <img className="bigLogo" src={bigLogo} alt="bigLogo" />
          </Grid>
        </Grid>
        <Grid container className={classes.introBtnsContainer} spacing={2}>
          <Grid className={classes.introBtnItem} item xs={12} sm={6}>
            <Link className={classes.introLink} to="/tutorial/get-started">
              <Button
                className={classes.getStartedBtn}
                disableElevation
                fullWidth
              >
                Get Started
              </Button>
            </Link>
          </Grid>
          <Grid className={classes.introBtnItem} item xs={12} sm={6}>
            <Link className={classes.introLink} to="/docs">
              <Button
                endIcon={<GotoIcon />}
                className={classes.docsBtn}
                disableElevation
                fullWidth
              >
                Documentation
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Typography className={classes.pageTitle2} variant="h4" component="div">
          Features
        </Typography>
        <Grid className={classes.featuresContainer} container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card className={classes.featureItem} elevation={0}>
                  <CardContent>
                    <Icon className={classes.featureIcon} />
                    <Typography
                      className={classes.featureText}
                      variant="h5"
                      component="div"
                    >
                      {feature.title}
                    </Typography>
                    {feature.subtitles.map((subtitle, subtitleIndex) => (
                      <Typography
                        className={classes.featureText}
                        variant="subtitle2"
                        component="div"
                        key={subtitleIndex}
                        style={{ marginTop: 10 }}
                      >
                        {subtitle}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Fade>
  );
};

export default Home;
