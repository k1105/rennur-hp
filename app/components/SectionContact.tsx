import s from "./SectionContact.module.css";

export default function SectionContact() {
  return (
    <section id="contact">
      <p className="lbl global-text-xs">Contact</p>
      <p className="ja-prose global-text-md" style={{ marginBottom: "32px" }}>
        プロジェクトのご相談、コラボレーションのご提案、
        <br />
        または単純に話してみたいという方も、
        <br />
        以下よりご連絡ください。
      </p>
      <p className={`${s.email} global-text-sm`}>hello@rennur.jp</p>
    </section>
  );
}
