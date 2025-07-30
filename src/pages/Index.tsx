import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Icon name="Smile" className="h-8 w-8 text-primary mr-2" />
                <span className="font-inter font-bold text-xl text-gray-900">Дентал Клиник</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#doctors" className="text-gray-700 hover:text-primary transition-colors">Врачи</a>
              <a href="#prices" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-medical-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-inter font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
                Здоровые зубы - 
                <span className="text-primary"> красивая улыбка</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Современная стоматология с безболезненным лечением и индивидуальным подходом к каждому пациенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Записаться на прием
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/880d3f86-b7e7-40da-bd42-41a472ac970f.jpg" 
                alt="Современная стоматологическая клиника"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр стоматологических услуг с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Tooth",
                title: "Лечение кариеса",
                description: "Безболезненное лечение кариеса с использованием современных материалов",
                price: "от 3 500 ₽"
              },
              {
                icon: "Sparkles",
                title: "Профессиональная чистка",
                description: "Удаление зубного камня и налета, полировка зубов",
                price: "от 4 000 ₽"
              },
              {
                icon: "Crown",
                title: "Протезирование",
                description: "Коронки, мосты, съемные и несъемные протезы",
                price: "от 15 000 ₽"
              },
              {
                icon: "Zap",
                title: "Отбеливание зубов",
                description: "Профессиональное отбеливание для белоснежной улыбки",
                price: "от 12 000 ₽"
              },
              {
                icon: "Wrench",
                title: "Брекеты",
                description: "Исправление прикуса металлическими и керамическими брекетами",
                price: "от 80 000 ₽"
              },
              {
                icon: "Plus",
                title: "Имплантация",
                description: "Установка зубных имплантов премиум класса",
                price: "от 45 000 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-inter text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary text-lg">{service.price}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Наши врачи
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда опытных специалистов с многолетним стажем и постоянным повышением квалификации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Иванова Елена Сергеевна",
                specialty: "Стоматолог-терапевт",
                experience: "15 лет опыта",
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              },
              {
                name: "Петров Михаил Александрович", 
                specialty: "Стоматолог-хирург",
                experience: "12 лет опыта",
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              },
              {
                name: "Сидорова Анна Владимировна",
                specialty: "Стоматолог-ортодонт",
                experience: "10 лет опыта", 
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              }
            ].map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-4">{doctor.experience}</p>
                  <Button variant="outline" size="sm">
                    Записаться к врачу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачная система ценообразования без скрытых доплат
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-medical-light">
                  <tr>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Услуга</th>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Описание</th>
                    <th className="px-6 py-4 text-right font-inter font-semibold text-gray-900">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Консультация стоматолога", description: "Первичный осмотр и составление плана лечения", price: "1 500 ₽" },
                    { service: "Лечение кариеса", description: "Пломба световой полимеризации", price: "3 500 ₽" },
                    { service: "Профессиональная чистка", description: "Удаление зубного камня и налета", price: "4 000 ₽" },
                    { service: "Отбеливание зубов", description: "Профессиональное отбеливание системой Zoom", price: "12 000 ₽" },
                    { service: "Коронка керамическая", description: "Безметалловая керамическая коронка", price: "25 000 ₽" },
                    { service: "Имплант", description: "Установка импланта с коронкой", price: "65 000 ₽" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{item.service}</td>
                      <td className="px-6 py-4 text-gray-600">{item.description}</td>
                      <td className="px-6 py-4 text-right font-semibold text-primary">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-medical-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Записаться на прием
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.ru" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Input id="service" placeholder="Выберите услугу" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Дополнительная информация" rows={4} />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-600">
              Мы находимся в центре города и работаем для вас каждый день
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Тверская, д. 15</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-lg mb-2">Время работы</h3>
              <p className="text-gray-600">Пн-Пт: 9:00-21:00<br />Сб-Вс: 10:00-18:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Smile" className="h-8 w-8 text-primary mr-2" />
                <span className="font-inter font-bold text-xl">Дентал Клиник</span>
              </div>
              <p className="text-gray-400">
                Современная стоматология с заботой о каждом пациенте
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лечение кариеса</li>
                <li>Протезирование</li>
                <li>Имплантация</li>
                <li>Отбеливание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@dentalclinic.ru</p>
                <p>г. Москва, ул. Тверская, д. 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Дентал Клиник. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;