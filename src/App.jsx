// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import FilterBar from './components/FilterBar/FilterBar.jsx';
import { useState } from 'react';

// TODO: state (useState):
//   members          - start with initialMembers
//   tasks            - start with initialTasks
//   selectedMemberId - start with null
//   showOnlyActive   - start with false
//   layout           - start with "list"

// TODO: compute the members to show, the selected member and their tasks

// TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
export default function App() {
  const [members, setMembers] = useState(initialMembers);
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [layout, setLayout] = useState("list");


  return <div className={styles.app}>
    <FilterBar/>
  </div>
}
