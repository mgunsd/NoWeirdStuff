import React from 'react';
import Trap from './Trap';



const App = () => {
  return (
    <div style={styles.div}>
      <Trap />
      <div style={styles.indiv}>
        <a
          href="https://codepen.io/bnhovde/pen/OJLYGKx"
          target="_blank"
          style={styles.link}
        ><p className="footer_link_text">Credit: Bard Hovde</p>
        </a><a
          href="https://github.com/mgunsd/NoWeirdStuff"
          target="_blank"
          style={styles.link}
        ><p className="footer_link_text">Repo</p>
        </a>
      </div>
    </div>
  )
};

export default App;

const styles = {
  div: {
    minHeight: '100vh',
  },
  link: {
    fontSize: '0.7rem',
  },
  indiv: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: "4vh",
    marginLeft: "4vh",
    marginTop: "-2vh",
    marginBottom: "0",
    justifyContent: 'space-between',
  }
};