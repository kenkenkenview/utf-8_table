function App() {
  let number = 0x0000;
  const arr = []
  for (let i = 0; i < 1000; i++) {
    number++;
    console.log(String.fromCodePoint(number))
    arr.push(String.fromCodePoint(number))
  }
  console.log(`\u0001`);
  return (
    <div className="App">
      <header className="App-header">
        <p>{arr}</p>
      </header>
    </div>
  );
}

export default App;
