import HeroSection from "@/components/HeroSection";
import StoryCard from "@/components/StoryCard";

const mockStories = [
  {
    title: "Как я победил диабет 2 типа без лекарств",
    condition: "Диабет 2 типа",
    author: "Анна К.",
    excerpt:
      "После 15 лет борьбы с диабетом я нашла способ контролировать сахар только питанием и физической активностью. Делюсь своим опытом и рационом питания...",
    timeAgo: "2 дня назад",
    category: "Эндокринология",
  },
  {
    title: "Восстановление после инсульта: мой путь к выздоровлению",
    condition: "Инсульт",
    author: "Михаил П.",
    excerpt:
      "В 45 лет у меня случился инсульт. Врачи говорили, что полное восстановление невозможно. Но спустя год интенсивной реабилитации я доказал обратное...",
    timeAgo: "5 дней назад",
    category: "Неврология",
  },
  {
    title: "Депрессия отступила: как я вернул радость жизни",
    condition: "Депрессия",
    author: "Елена С.",
    excerpt:
      "Три года тяжелой депрессии казались бесконечными. Расскажу о комплексном подходе, который помог мне выйти из этого состояния и снова полюбить жизнь...",
    timeAgo: "1 неделю назад",
    category: "Психическое здоровье",
  },
  {
    title: "Артрит больше не приговор: история моего выздоровления",
    condition: "Ревматоидный артрит",
    author: "Владимир Т.",
    excerpt:
      "Диагноз ревматоидный артрит поставили в 35 лет. Боль была невыносимой. Но правильное лечение и изменение образа жизни дали удивительные результаты...",
    timeAgo: "2 недели назад",
    category: "Ревматология",
  },
  {
    title: "Как я избавился от панических атак навсегда",
    condition: "Панические атаки",
    author: "Дмитрий Л.",
    excerpt:
      "Панические атаки начались внезапно и кардинально изменили мою жизнь. Расскажу о техниках и методах, которые помогли мне полностью избавиться от них...",
    timeAgo: "3 недели назад",
    category: "Психическое здоровье",
  },
  {
    title: "Гипертония под контролем без постоянных таблеток",
    condition: "Гипертония",
    author: "Ольга М.",
    excerpt:
      "После 10 лет приема лекарств я смогла стабилизировать давление естественными методами. Делюсь своим опытом изменения питания и образа жизни...",
    timeAgo: "1 месяц назад",
    category: "Кардиология",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Последние истории выздоровления
            </h2>
            <p className="text-lg text-medical-gray max-w-2xl mx-auto">
              Вдохновляющие истории людей, которые смогли преодолеть болезни и
              вернуться к полноценной жизни
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border-2 border-medical-blue text-medical-blue px-8 py-3 rounded-lg font-medium hover:bg-medical-blue hover:text-white transition-colors duration-200">
              Показать больше историй
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
