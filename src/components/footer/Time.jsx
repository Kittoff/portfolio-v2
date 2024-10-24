"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  const [utcOffset, setUtcOffset] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const dateInFrance = new Intl.DateTimeFormat("fr-FR", options).format(
        now
      );
      setTime(dateInFrance);

      // Déterminer le décalage horaire
      const january = new Date(now.getFullYear(), 0, 1);
      const july = new Date(now.getFullYear(), 6, 1);
      const stdOffset = Math.max(
        january.getTimezoneOffset(),
        july.getTimezoneOffset()
      );
      const isSummerTime = now.getTimezoneOffset() < stdOffset;

      setUtcOffset(isSummerTime ? "UTC+2" : "UTC+1");
    };

    const scheduleNextUpdate = () => {
      const now = new Date();
      // Calcule le temps restant jusqu'à la prochaine minute
      const secondsUntilNextMinute = 60 - now.getSeconds();
      // Planifie la mise à jour pour la prochaine minute
      setTimeout(() => {
        updateTime();
        scheduleNextUpdate(); // Replanifie la mise à jour après l'actualisation
      }, secondsUntilNextMinute * 1000);
    };

    updateTime(); // Appel initial pour définir l'heure immédiatement
    scheduleNextUpdate(); // Démarre le calendrier pour les mises à jour

    return () => clearTimeout(scheduleNextUpdate); // Cleanup sur unmount
  }, []);

  return (
    <div>
      <div>
        {time} {utcOffset}
      </div>
    </div>
  );
};

export default Clock;
