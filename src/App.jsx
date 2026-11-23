// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import MemberCard from './components/MemberCard/MemberCard.jsx'
import MembersList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'

// TODO: state (useState):
//   members          - start with initialMembers
//   tasks            - start with initialTasks
//   selectedMemberId - start with null
//   showOnlyActive   - start with false
//   layout           - start with "list"

// TODO: compute the members to show, the selected member and their tasks

// TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
export default function App() {
  const [members, setMembers] = useState(initialMembers)
  const [tasks, setTasks] = useState(initialTasks)
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [showOnlyActive, setShowOnlyActive] = useState(false)
  const [layout, setLayout] = useState('list')

  const filteredMembers = showOnlyActive
    ? members.filter((member) => member.isActive)
    : members

  // functions
  function handleSelect(memberId) {
    setSelectedMemberId(memberId)
  }
  
  function onToggleActive() {
    setShowOnlyActive(!showOnlyActive)
  }
  
  function onLayoutChange(design) {
    if (design === 'list' || design === 'grid') setLayout(design)
  }

  return (
    <div className={styles.app}>
      <Header />
      <FilterBar
        showOnlyActive={showOnlyActive}
        onToggleActive={onToggleActive}
        layout={layout}
        onLayoutChange={onLayoutChange}
      />
      <div className={styles.content}>
        <MembersList
          members={filteredMembers}
          layout={layout}
          selectedMemberId={selectedMemberId}
          onSelect={handleSelect}
        />
        <TasksPanel />
      </div>
      <footer />
    </div>
  )
}
