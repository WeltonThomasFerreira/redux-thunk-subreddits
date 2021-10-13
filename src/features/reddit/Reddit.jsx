import React from 'react';
import Posts from './posts';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, fetchSubReddits } from './redditSlice';

export default function Reddit() {
  const dispatch = useDispatch();
  const { query, loading } = useSelector((state) => state.reddit);
  return (
    <main>
      <form>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Subreddit..."
          onChange={(event) => {
            dispatch(handleChange(event.target.value));
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            dispatch(fetchSubReddits(query));
          }}
        >
          Submit
        </button>
      </form>
      <div>{loading ? `Carregando...` : <Posts />}</div>
    </main>
  );
}
