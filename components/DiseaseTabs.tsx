"use client";

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

type DiseaseTab = {
  id: string;
  label: string;
};

type DiseaseTabsProps = {
  tabs: DiseaseTab[];
  panels: ReactNode[];
};

export default function DiseaseTabs({ tabs, panels }: DiseaseTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");

  useEffect(() => {
    function syncTabWithHash() {
      const panelId = window.location.hash.slice(1);
      const matchingTab = tabs.find(
        (tab) => `disease-panel-${tab.id}` === panelId,
      );

      if (!matchingTab) return;
      setActiveTabId(matchingTab.id);
      window.requestAnimationFrame(() => {
        document.getElementById(panelId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }

    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    return () => window.removeEventListener("hashchange", syncTabWithHash);
  }, [tabs]);

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    setActiveTabId(nextTab.id);
    document.getElementById(`disease-tab-${nextTab.id}`)?.focus();
  }

  return (
    <>
      <div
        className="mb-5 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Pilih topik penyakit"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;

          return (
            <button
              aria-controls={`disease-panel-${tab.id}`}
              aria-selected={isActive}
              className={`rounded-full border px-4.5 py-2.5 text-[0.9rem] font-bold transition-colors ${
                isActive
                  ? "border-(--green) bg-(--green) text-white"
                  : "border-[#d5e4d9] bg-white text-[#4d6256] hover:border-(--green) hover:text-(--green)"
              }`}
              id={`disease-tab-${tab.id}`}
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab, index) => (
        <div
          aria-labelledby={`disease-tab-${tab.id}`}
          className="scroll-mt-22.5"
          hidden={tab.id !== activeTabId}
          id={`disease-panel-${tab.id}`}
          key={tab.id}
          role="tabpanel"
          tabIndex={0}
        >
          {panels[index]}
        </div>
      ))}
    </>
  );
}
