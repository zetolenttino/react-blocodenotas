import React, { useCallback, useState } from "react";
import Tasks from "./components/Tasks";
import './App.css';
import { Tarefa } from "./types/task";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import TaskDetails from './components/TaskDetails'
// import { v4 as uuidv4 } from 'uuid';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <>
                <AddTask />
                <Tasks />
              </>
            )}
          />
          <Route path='/:taskId' component={TaskDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;