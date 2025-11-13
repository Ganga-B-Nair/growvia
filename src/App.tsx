import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatbot from './components/Chatbot/Chatbot';
import AptitudeQuiz from './components/AptitudeQuiz/AptitudeQuiz';
import CareerVisualizer from './components/CareerVisualizer/CareerVisualizer';
import CollegeDirectory from './components/CollegeDirectory/CollegeDirectory';
import TimelineTracker from './components/TimelineTracker/TimelineTracker';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={Chatbot} />
          <Route path="/aptitude-quiz" component={AptitudeQuiz} />
          <Route path="/career-visualizer" component={CareerVisualizer} />
          <Route path="/college-directory" component={CollegeDirectory} />
          <Route path="/timeline-tracker" component={TimelineTracker} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;