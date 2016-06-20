var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/sky.jpg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  h1: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
  headerContainer: {
    width: '100%',
    height: '92%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#44C4E8',
    color: '#fff',
    padding: 5
  },
  margin: {
    margin: '0.5em',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  }
};

module.exports = styles;
