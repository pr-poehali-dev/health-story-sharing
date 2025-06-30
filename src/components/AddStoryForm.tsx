import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const medicalCategories = [
  "Кардиология",
  "Неврология",
  "Эндокринология",
  "Онкология",
  "Психическое здоровье",
  "Ревматология",
  "Дерматология",
  "Гастроэнтерология",
  "Пульмонология",
  "Урология",
  "Другое",
];

export default function AddStoryForm() {
  const [formData, setFormData] = useState({
    title: "",
    condition: "",
    category: "",
    author: "",
    story: "",
    beforeTreatment: "",
    treatment: "",
    afterTreatment: "",
    advice: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Отправка истории:", formData);
    // Здесь будет логика отправки на сервер
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Icon name="PenTool" size={32} className="text-medical-blue" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">
          Поделитесь своей историей исцеления
        </h1>
        <p className="text-lg text-medical-gray max-w-2xl mx-auto">
          Ваш опыт может стать источником надежды и вдохновения для других людей
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Info" size={20} className="text-medical-blue" />
              Основная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Заголовок вашей истории *
              </label>
              <Input
                placeholder="Например: Как я победил диабет 2 типа"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Диагноз/состояние *
                </label>
                <Input
                  placeholder="Диабет 2 типа"
                  value={formData.condition}
                  onChange={(e) => handleChange("condition", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Категория *
                </label>
                <Select
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {medicalCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Как вас называть? *
              </label>
              <Input
                placeholder="Имя или псевдоним"
                value={formData.author}
                onChange={(e) => handleChange("author", e.target.value)}
                className="max-w-md"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={20} className="text-medical-blue" />
              Ваша история
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Состояние до лечения
              </label>
              <Textarea
                placeholder="Опишите, как проявлялась болезнь, какие были симптомы..."
                value={formData.beforeTreatment}
                onChange={(e) =>
                  handleChange("beforeTreatment", e.target.value)
                }
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Лечение и процесс выздоровления *
              </label>
              <Textarea
                placeholder="Расскажите подробно о том, что помогло вам выздороветь..."
                value={formData.treatment}
                onChange={(e) => handleChange("treatment", e.target.value)}
                rows={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Результат и текущее состояние
              </label>
              <Textarea
                placeholder="Как вы себя чувствуете сейчас, какие изменения произошли..."
                value={formData.afterTreatment}
                onChange={(e) => handleChange("afterTreatment", e.target.value)}
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Советы другим людям
              </label>
              <Textarea
                placeholder="Какие советы вы можете дать людям с похожим диагнозом..."
                value={formData.advice}
                onChange={(e) => handleChange("advice", e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon
              name="AlertTriangle"
              size={20}
              className="text-yellow-600 mt-0.5"
            />
            <div className="text-sm text-yellow-800">
              <strong>Важно:</strong> Информация на сайте носит ознакомительный
              характер. Перед принятием решений о лечении обязательно
              проконсультируйтесь с врачом.
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button type="button" variant="outline" size="lg" className="px-8">
            Отменить
          </Button>
          <Button
            type="submit"
            size="lg"
            className="bg-medical-blue hover:bg-medical-blue/90 px-8"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Опубликовать историю
          </Button>
        </div>
      </form>
    </div>
  );
}
