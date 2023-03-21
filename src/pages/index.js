import ActiveRepos from "../components/activeRepos/ActiveRepos";
import ContributionCalendar from "../components/contributionCalendar/ContributionCalendar";
import LanguagesUsed from "@/components/languagesUsed/LanguagesUsed";
import QR from "@/components/QR/QR";
import Recent from "@/components/Recent/Recent"
import ProfileCard from "@/components/profileCard/ProfileCard";
import styles from "../styles/profile.module.css"

export default function Home() {

  return (
    <div className={styles.page}>

      <div className={styles.main}>
        <div className={styles.left}>
          <ProfileCard/>
          <div className={styles.bottomLeft}>
            <ContributionCalendar />
          </div>
          <div className={styles.languages}>
            <LanguagesUsed />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.content}>
            <ActiveRepos />
          </div>

          <div className={styles.qr}>
            <QR value={"btcretriever@getalby.com"} />
          </div>
        </div>
        <div className={styles.right}>
          <Recent />
        </div>
      </div>
    </div>
  );
};
