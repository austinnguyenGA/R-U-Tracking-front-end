import './App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  { event: "100 M", men: "10.05", women: "11.15" },
  { event: "200 M", men: "20.24", women: "22.80" },
  { event: "400 M", men: "45.20", women: "51.35"},
  { event: "800 M", men: "1:46.25", women: "2:02.50" },
  { event: "1500 M", men: "3:37.50", women: "4:06.00" },
  { event: "5000 M", men: "13:25.00", women: "15:20.00"},
  { event: "10000 M", men: "28:00.00", women: "32:25.00" },
]
  
function Trial1() {
  return (
    <div className="Trial1">
         <section className='trackAsset'>
            <div className='grid'>
                <div>
                    <img src={"https://i.imgur.com/RWsW0iQ.jpg"} />
                    <h3>Run Like the Wind</h3>
                </div>
            </div>
        </section>
      <table>
        <tr>
          <th>Event</th>
          <th>Mens</th>
          <th>Womens</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.event}</td>
              <td>{val.men}</td>
              <td>{val.women}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default Trial1;