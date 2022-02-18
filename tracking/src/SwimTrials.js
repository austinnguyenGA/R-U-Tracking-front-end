import './App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  { event: "50 M FR", men: "22.71", women: "25.65" },
  { event: "100 M FR", men: "49.74", women: "55.56" },
  { event: "200 M FR", men: "1:49.65", women: "2:00.24"},
  { event: "400 M FR", men: "3:54.21", women: "4:13.28" },
  { event: "100 M BK", men: "55.51", women: "1:01.49" },
  { event: "200 M BK", men: "2:00.81", women: "2:12.94"},
  { event: "100 M BR", men: "1:01.97", women: "1:09.55" },
  { event: "200 M BR", men: "2:15.28", women: "2:30.49" },
  { event: "100 M FLY", men: "53.37", women: "59.59"},
  { event: "200 M FLY", men: "1:59.63", women: "2:12.56" },
  { event: "200 M IM", men: "2:03.02", women: "2:15.56" },
  { event: "400 M IM", men: "4:23.24", women: "4:47.72"},
]
  
function Trial() {
  return (
    <div className="Trial">
       <section className='swimAsset'>
            <div className='grid'>
                <div>
                    <img src={"https://i.imgur.com/60egnVj.jpg"} />
                    <h3>Swim Your Heart Out</h3>
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
  
export default Trial;