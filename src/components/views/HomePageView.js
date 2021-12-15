import Navbar from'./Navbar/Navbar'
import {useStyles} from './styles/usestyles'
import bid from './some.png'

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <div className={classes.greeting}>
        <img src={bid} alt="what" className={classes.pic}></img>
        <h1>Home Page</h1>
      </div>
      
    </div>
  );    
}




export default HomePageView;