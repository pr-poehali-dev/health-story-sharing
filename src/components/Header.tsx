import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-medical-blue p-2 rounded-lg">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-gray-900">
                Истории исцеления
              </h1>
              <p className="text-xs text-medical-gray">
                Платформа для обмена опытом
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-medical-blue transition-colors"
            >
              Все истории
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-medical-blue transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-medical-blue transition-colors"
            >
              О проекте
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex border-medical-blue text-medical-blue hover:bg-medical-blue/5"
            >
              <Icon name="BookOpen" size={16} className="mr-2" />
              Читать
            </Button>

            <Button
              size="sm"
              className="bg-medical-blue hover:bg-medical-blue/90 text-white"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Поделиться
            </Button>

            <button className="md:hidden p-2">
              <Icon name="Menu" size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
