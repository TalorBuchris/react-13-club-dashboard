import MemberCard from "../MemberCard/MemberCard";
import styles from "./MembersList.module.css";

function MembersList({
  members,
  layout,
  selectedMemberId,
  onSelect
}) {
  if (members.length === 0) {
    return <p className={styles.empty}>No members to show</p>;
  }

  return (
    <div className={`${styles.membersList} ${styles[layout]}`}>
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          isSelected={selectedMemberId === member.id}
          onSelect={onSelect}
          layout={layout}
        />
      ))}
    </div>
  );
}

export default MembersList;