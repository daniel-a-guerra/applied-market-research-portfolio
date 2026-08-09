/*
 * Approved public destinations only.
 * Keep every unapproved value as an empty string. Never insert guessed URLs,
 * contact details, local filesystem paths or credentials.
 */
window.PUBLIC_LINKS = Object.freeze({
  AGRO_DASHBOARD_URL: "https://agromonetary-research.streamlit.app/",
  GOLD_DXY_DASHBOARD_URL: "https://gold-dxy-research.streamlit.app/",
  WEEKLY_BRIEFING_ES_PDF: "assets/documents/agro/AMR_Weekly_Briefing_Public_Sample_ES.pdf",
  MONTHLY_STRATEGIC_REPORT_ES_PDF: "assets/documents/agro/AMR_Monthly_Strategic_Report_Public_Sample_ES.pdf",
  AGRO_RESEARCH_NOTE_01_EN_PDF: "",
  AGRO_RESEARCH_NOTE_01_ES_PDF: "",
  AGRO_RESEARCH_NOTE_02_EN_PDF: "",
  AGRO_RESEARCH_NOTE_02_ES_PDF: "",
  GOLD_DXY_RESEARCH_NOTE_01_EN_PDF: "",
  GOLD_DXY_RESEARCH_NOTE_01_ES_PDF: "",
  LINKEDIN_URL: "https://www.linkedin.com/in/daniel-a-guerra",
  GITHUB_PROFILE_URL: "",
  PUBLIC_CONTACT_EMAIL: "daniel@agromonetaryresearch.com",
  FINAL_DOMAIN: "agromonetaryresearch.com"
});
