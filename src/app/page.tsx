import Hero from "@/components/hero";
import HomeLang from "@/lang/de/homepage.json";
import ICONLINK from "@/ui/ICONLINK";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container flex col center my-1">
        <h2>{HomeLang.company.content}</h2>
        <div className="flex row">
          {HomeLang.company.companys.map((com) => {
            return <ICONLINK href={com.href} svg={com.src} title={com.title} />;
          })}
        </div>
      </section>
      <hr />
      <section className="container flex col center my-1">
        <h2>Projekte</h2>
      </section>
      <hr />
      <section className="container flex col center my-1">
        <h2>Kunden</h2>
      </section>
    </>
  );
}
