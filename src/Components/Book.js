import { useLocation } from 'react-router-dom';

function Book() {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get('title');

  const showTimings = ["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"];
  return (
    <>
    <div>

      <h1>Book Tickets for {title}</h1>

    <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Movie : </label>
        <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="showname" value={title}/>
        </div>
    </div>

    



    <div class="mb-3 row">
  <label for="inputNumber" class="col-sm-2 col-form-label">Number of Tickets</label>
  <div class="col-sm-10">
    <select id="inputNumber" class="form-select" required>
      <option value="" disabled selected>Select Number of tickets</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
  </div>
</div>


<div class="mb-3 row">
        <label for="inputTime" class="col-sm-2 col-form-label">Show Timing</label>
        <div class="col-sm-10">
          <select id="inputTime" class="form-select" required>
            <option value="" disabled selected>Select show timing</option>
            {showTimings.map((timing, index) => (
              <option key={index} value={timing}>{timing}</option>
            ))}
          </select>
        </div>
      </div>

    </div>

    <button type="button" class="btn btn-primary">Submit</button>

    </>
  );
}

export default Book;
