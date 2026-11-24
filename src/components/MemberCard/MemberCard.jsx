import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect, layout }) {
  
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={`${styles.card} ${styles[layout]}
        ${!member.isActive ? styles.inactive : ''}
        ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(member.id)}
    >
      <div className={styles.avatar}>{initials}</div>

      <div className={styles.details}>
        <h3 className={styles.name}>{member.name}</h3>
        <span className={styles.badge}>{member.role}</span>
      </div>

      <button
        className={`${styles.roleButton} ${styles[member.role.toLowerCase()]}`}
        disabled={!member.isActive}
      >
        {member.role}
      </button>
    </div>
  )
}
