var React = require('react');

function Home (props) {
  return (
    <div>
      <h1> Enter a City </h1>
      <div>
        <form>
          <div>
            <input placeholder='eg. London' type='text' />
          </div>
          <div>
            <button> Get Weather </button>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = Home;
