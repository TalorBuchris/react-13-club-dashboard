import styles from './TasksPanel.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: string, isActive: boolean} | null} props.member - the selected member, or null
 * @param {Array<{id: number, title: string, done: boolean, assignedTo: number}>} props.tasks - the tasks of the selected member
 * @param {(taskId: number) => void} props.onToggleTask - call it with task.id when a task checkbox is clicked
 */
export default function TasksPanel({ member, tasks, onToggleTask }) {

  if (!member) return <p>Select a member to see their tasks</p>

  return (
    <div className={styles.tasksPanel}>
      <h2 className={styles.title}>Tasks of {member.name}</h2>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet</p>
      ) : (
        tasks.map((oneTask) => {
          return (
            <label
              key={oneTask.id}
              htmlFor="{'a' + oneTask.id}"
              className={`${styles.task} ${oneTask.done ? styles.done : ''}`}
            >
              <input
                type="checkbox"
                id={'a' + oneTask.id}
                checked={oneTask.done}
                onChange={() => {
                  onToggleTask(oneTask.id)
                }}
              />
              {oneTask.title}
            </label>
          )
        })
      )}
    </div>
  )
}
