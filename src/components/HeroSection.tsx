import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-medical-lightblue to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-medical-blue/10 p-4 rounded-full">
            <Icon name="Heart" size={48} className="text-medical-blue" />
          </div>
        </div>

        <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
          Истории исцеления
        </h1>

        <p className="text-xl text-medical-gray max-w-3xl mx-auto mb-8 leading-relaxed">
          Поделитесь своим опытом выздоровления и помогите другим людям найти
          надежду. Каждая история важна, каждый опыт ценен.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 text-lg"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Поделиться историей
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-medical-blue text-medical-blue hover:bg-medical-blue/5 px-8 py-3 text-lg"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Читать истории
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Icon
                name="Users"
                size={32}
                className="text-medical-blue mx-auto mb-4"
              />
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
                500+
              </h3>
              <p className="text-medical-gray">Человек поделились опытом</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Icon
                name="Activity"
                size={32}
                className="text-medical-blue mx-auto mb-4"
              />
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
                1200+
              </h3>
              <p className="text-medical-gray">Историй выздоровления</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Icon
                name="Stethoscope"
                size={32}
                className="text-medical-blue mx-auto mb-4"
              />
              <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">
                80+
              </h3>
              <p className="text-medical-gray">Различных заболеваний</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
