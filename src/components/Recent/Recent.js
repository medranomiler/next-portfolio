import { useState, useEffect } from "react";
import styles from "./recent.module.css";

const Recent = () => {
  const [events, setEvents] = useState([]);
  const user = "medranomiler"

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/events`,
        );
        const data = await response.json();
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    fetchEvents();

  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Recent GitHub Activity</h2>
      <div className={styles.eventListContainer}>
        <div className={styles.eventList}>
          {events.map((event) => (
            <div className={styles.event} key={event.id}>
              <div className={styles.eventType}><p>{event.type}</p><p>{event.created_at}</p></div>
              <div className={styles.eventPayload}>
                <div className={styles.card}>
                  <div className={styles.cardBody}>
                    {event.type === "PushEvent" && (
                      <div>
                        <div>
                          Repository:{" "}
                          <a
                            href={event.repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.repo.name}
                          </a>
                        </div>
                        <div>
                          Author: {event.payload.commits[0].author.name} (
                          {event.payload.commits[0].author.email})
                        </div>
                        <div>Message: {event.payload.commits[0].message}</div>
                      </div>
                    )}
                    {event.type === "PullRequestEvent" && (
                      <div>
                        <div>
                          Pull Request:{" "}
                          <a
                            href={event.payload.pull_request.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.payload.pull_request.title}
                          </a>
                        </div>
                        <div>
                          Repository:{" "}
                          <a
                            href={event.repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.repo.name}
                          </a>
                        </div>
                      </div>
                    )}
                    {event.type === "CreateEvent" && (
                      <div>
                        <div>
                          {event.payload.ref_type}: {event.payload.ref}
                        </div>
                        <div>
                          Repository:{" "}
                          <a
                            href={event.repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {event.repo.name}
                          </a>
                        </div>
                      </div>
                    )}
                    {event.type !== "PushEvent" && event.type !== "PullRequestEvent" && event.type !== "CreateEvent" && (
                      <div>Event payload: {JSON.stringify(event.payload)}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
