import { useSelector, useDispatch } from "react-redux";
import { voteFor, addAn } from "./reducers/anecdoteReducer";
import {
  pushNotification,
  removeNotification,
} from "./reducers/notificationReducer";
import { setFilter } from "./reducers/filterReducer";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
const App = () => {
  const anecdotes = useSelector((state) => state.anecdots);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteFor(id));
    dispatch(pushNotification("Hai votato"));
    setTimeout(() => {
      dispatch(removeNotification(""));
    }, 4000);
  };
  const add = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    dispatch(addAn(content));
  };
  const filter = (value) => {
    dispatch(setFilter(value));
  };
  return (
    <div>
      <Notification />
      <Filter filter={filter} />
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
