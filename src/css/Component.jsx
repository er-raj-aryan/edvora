import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  container: {},
  item: {},
  appBar: {
    backgroundColor: "#1c1d1e !important",
  },
  link: {
    textDecoration: "none",
    color: "white",
    padding: "10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  imgItem: {
    position: "absolute",
  },
  img: {
    height: "100vh",
    width: "100%",
  },
  text_container: {
    position: "relative",
  },
  error: {
    color: "white",
    zIndex: "99",
  },
  btn: {},
  homeImg: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  homeItem1:{
    position: "absolute",
    height:'100vh',
    width:'100%',
  },
  homeBlend: {
    background: "#000000b5",
    backdropFilter: "blur(3px)",
    height: "100vh",
    width: "100%",
    position: "relative",
  },
  homeTextContainer:{
    position: "absolute",
    zIndex: 99,
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 aboutImg: {
    height: "100vh",
    width: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  aboutItem1:{
    position: "absolute",
    height:'100vh',
    width:'100%',
  },
  aboutBlend: {
    background: "#000000b5",
    backdropFilter: "blur(3px)",
    height: "100vh",
    width: "100%",
    position: "relative",
  },
  aboutTextContainer:{
    position: "absolute",
    zIndex: 99,
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection:'column !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutdivide:{
    width: '100px',
    margin: '5px  !important',
    background: 'grey',
  },
  pokemon:{
    justifyContent:'center',
    padding:'30px',
    position: "absolute",
    zIndex: 99,
    height: '100vh',
    width: '100%',
    display: 'flex',
    // flexDirection:'column !important',
    alignItems: 'center',
  },
  pokemonCard:{
    display:'flex',
  },
  
}));

export default useStyle;
