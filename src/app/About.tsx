import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");
  const paragraphs = t("paragraphs", { returnObjects: true }) as string[];

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{t("title")}</h1>
      {Array.isArray(paragraphs)
        ? paragraphs.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {p}
            </p>
          ))
        : null}
    </main>
  );
}
