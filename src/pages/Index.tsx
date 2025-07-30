import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-rajdhani overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-slate-900 to-slate-800 opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-primary/30 bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <Icon name="Zap" className="h-6 w-6 text-black font-bold" />
                </div>
                <span className="font-orbitron font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NEXUS DENTAL
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">УСЛУГИ</a>
              <a href="#team" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">КОМАНДА</a>
              <a href="#tech" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">ТЕХНОЛОГИИ</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium tracking-wide">КОНТАКТ</a>
              <Button className="bg-gradient-to-r from-primary to-accent text-black hover:opacity-90 font-bold tracking-wider">
                ЗАПИСАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-orbitron font-black text-5xl lg:text-7xl leading-tight">
                  БУДУЩЕЕ
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                    СТОМАТОЛОГИИ
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-foreground/70 font-light leading-relaxed">
                  Революционные технологии • Безболезненность • Максимальная точность
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-black hover:opacity-90 font-bold text-lg py-6 px-8 rounded-xl shadow-lg shadow-primary/25">
                  <Icon name="Rocket" className="mr-3 h-6 w-6" />
                  НАЧАТЬ ЛЕЧЕНИЕ
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black font-bold text-lg py-6 px-8 rounded-xl">
                  <Icon name="PlayCircle" className="mr-3 h-6 w-6" />
                  ВИРТУАЛЬНЫЙ ТУР
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-primary">10K+</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider">Операций</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-accent">100%</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider">Безболезненно</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-bold text-primary">24/7</div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wider">Доступность</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/880d3f86-b7e7-40da-bd42-41a472ac970f.jpg" 
                alt="Футуристичная стоматология"
                className="relative rounded-3xl shadow-2xl border border-primary/30"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-xl">
                <Icon name="Shield" className="h-12 w-12 text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-orbitron font-black text-4xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NANO ТЕХНОЛОГИИ
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Используем квантовые лазеры, ИИ-диагностику и роботизированную хирургию
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "ИИ ДИАГНОСТИКА",
                description: "Нейросети анализируют состояние зубов за миллисекунды",
                price: "БЕСПЛАТНО",
                gradient: "from-primary to-accent"
              },
              {
                icon: "Zap",
                title: "ЛАЗЕРНОЕ ЛЕЧЕНИЕ",
                description: "Квантовые лазеры удаляют кариес без сверления",
                price: "ОТ 8.500₽",
                gradient: "from-accent to-primary"
              },
              {
                icon: "Cpu",
                title: "РОБОТЫ-ХИРУРГИ",
                description: "Микрохирургия с точностью до нанометра",
                price: "ОТ 45.000₽",
                gradient: "from-primary to-accent"
              },
              {
                icon: "Sparkles",
                title: "ПЛАЗМА ОТБЕЛИВАНИЕ",
                description: "Холодная плазма безопасно отбеливает эмаль",
                price: "ОТ 25.000₽",
                gradient: "from-accent to-primary"
              },
              {
                icon: "Shield",
                title: "БИОЗАЩИТА",
                description: "Нанопокрытие защищает зубы от бактерий",
                price: "ОТ 12.000₽",
                gradient: "from-primary to-accent"
              },
              {
                icon: "Atom",
                title: "МОЛЕКУЛЯРНАЯ ИМПЛАНТАЦИЯ",
                description: "Имплантаты срастаются с костью на молекулярном уровне",
                price: "ОТ 120.000₽",
                gradient: "from-accent to-primary"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-lg border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:scale-105">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon name={service.icon} className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="font-orbitron text-xl font-bold tracking-wider">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/60 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className={`font-space-mono font-bold text-lg bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/20">
                      УЗНАТЬ →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-32 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-orbitron font-black text-4xl lg:text-6xl mb-6">
              КИБОРГ
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> КОМАНДА</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Врачи с имплантированными микрочипами для сверхточности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "DR. ALEX QUANTUM",
                role: "ГЛАВНЫЙ НЕЙРОХИРУРГ",
                experience: "ОПЫТ: 2145 ОПЕРАЦИЙ",
                augmentation: "ЛАЗЕРНОЕ ЗРЕНИЕ",
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              },
              {
                name: "DR. MAYA NANO",
                role: "СПЕЦИАЛИСТ ПО ИМПЛАНТАМ",
                experience: "ОПЫТ: 1876 ИМПЛАНТОВ", 
                augmentation: "ТАКТИЛЬНЫЕ СЕНСОРЫ",
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              },
              {
                name: "DR. ZION MATRIX",
                role: "ИИ-ДИАГНОСТ",
                experience: "ОПЫТ: ∞ АНАЛИЗОВ",
                augmentation: "КВАНТОВЫЙ МОЗГ",
                image: "/img/9e8a74df-95e3-43a5-9fc0-af0357522e2c.jpg"
              }
            ].map((doctor, index) => (
              <Card key={index} className="bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-lg border-primary/30 text-center hover:border-accent/60 transition-all duration-500 group">
                <CardContent className="pt-8">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-lg"></div>
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary/50"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <h3 className="font-orbitron font-bold text-xl mb-2 tracking-wider">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-bold mb-2 tracking-wide">{doctor.role}</p>
                  <p className="text-foreground/60 mb-2 font-space-mono text-sm">{doctor.experience}</p>
                  <p className="text-accent text-sm font-bold mb-6">⚡ {doctor.augmentation}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black font-bold">
                    ЗАБРОНИРОВАТЬ СЕАНС
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-orbitron font-black text-4xl lg:text-6xl mb-6">
              ЦЕНОВАЯ
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> МАТРИЦА</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-lg rounded-3xl border border-primary/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary/20 to-accent/20">
                  <tr>
                    <th className="px-8 py-6 text-left font-orbitron font-bold text-foreground uppercase tracking-wider">ПРОТОКОЛ</th>
                    <th className="px-8 py-6 text-left font-orbitron font-bold text-foreground uppercase tracking-wider">ТЕХНОЛОГИЯ</th>
                    <th className="px-8 py-6 text-right font-orbitron font-bold text-foreground uppercase tracking-wider">СТОИМОСТЬ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { protocol: "СКАНИРОВАНИЕ", tech: "3D ГОЛОГРАММА + ИИ АНАЛИЗ", price: "БЕСПЛАТНО" },
                    { protocol: "NANO ЛЕЧЕНИЕ", tech: "КВАНТОВЫЕ ЛАЗЕРЫ + РОБОТЫ", price: "8.500₽" },
                    { protocol: "ПЛАЗМА ЧИСТКА", tech: "ХОЛОДНАЯ ПЛАЗМА + УЛЬТРАЗВУК", price: "12.000₽" },
                    { protocol: "QUANTUM ОТБЕЛИВАНИЕ", tech: "ФОТОННЫЕ ЛУЧИ + NANO ГЕЛЬ", price: "25.000₽" },
                    { protocol: "КИБЕР КОРОНКА", tech: "ТИТАНОВЫЙ СПЛАВ + 3D ПЕЧАТЬ", price: "45.000₽" },
                    { protocol: "БИОИМПЛАНТ", tech: "МОЛЕКУЛЯРНАЯ ИНТЕГРАЦИЯ", price: "120.000₽" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-primary/20 hover:bg-primary/10 transition-colors">
                      <td className="px-8 py-6 font-bold text-foreground">{item.protocol}</td>
                      <td className="px-8 py-6 text-foreground/70 font-space-mono text-sm">{item.tech}</td>
                      <td className="px-8 py-6 text-right font-orbitron font-bold text-accent text-lg">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Portal */}
      <section id="contact" className="relative z-10 py-32 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-black text-4xl lg:text-6xl mb-6">
              ПОРТАЛ
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> СВЯЗИ</span>
            </h2>
          </div>
          
          <Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-lg border-primary/30 shadow-2xl">
            <CardContent className="p-12">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label htmlFor="name" className="font-orbitron font-bold uppercase tracking-wider">ИМЯ ПОЛЬЗОВАТЕЛЯ</Label>
                  <Input id="name" className="bg-background/50 border-primary/30 focus:border-primary" placeholder="ВВЕДИТЕ ИДЕНТИФИКАТОР" />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="phone" className="font-orbitron font-bold uppercase tracking-wider">КАНАЛ СВЯЗИ</Label>
                  <Input id="phone" className="bg-background/50 border-primary/30 focus:border-primary" placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="email" className="font-orbitron font-bold uppercase tracking-wider">E-MAIL ПРОТОКОЛ</Label>
                  <Input id="email" type="email" className="bg-background/50 border-primary/30 focus:border-primary" placeholder="user@matrix.net" />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="service" className="font-orbitron font-bold uppercase tracking-wider">ТИП ОПЕРАЦИИ</Label>
                  <Input id="service" className="bg-background/50 border-primary/30 focus:border-primary" placeholder="ВЫБЕРИТЕ ПРОТОКОЛ" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <Label htmlFor="message" className="font-orbitron font-bold uppercase tracking-wider">СООБЩЕНИЕ</Label>
                  <Textarea id="message" className="bg-background/50 border-primary/30 focus:border-primary min-h-[120px]" placeholder="ОПИШИТЕ СИМПТОМЫ И ПОЖЕЛАНИЯ..." />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-black hover:opacity-90 font-orbitron font-bold text-lg py-6">
                    <Icon name="Send" className="mr-3 h-6 w-6" />
                    ОТПРАВИТЬ В МАТРИЦУ
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Terminal */}
      <footer className="relative z-10 bg-background border-t border-primary/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Zap" className="h-6 w-6 text-black" />
                </div>
                <span className="font-orbitron font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NEXUS DENTAL
                </span>
              </div>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                Первая в мире стоматология с полностью роботизированным лечением 
                и квантовыми технологиями восстановления зубов.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/40 transition-colors cursor-pointer">
                  <Icon name="Github" className="h-5 w-5 text-primary" />
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/40 transition-colors cursor-pointer">
                  <Icon name="Twitter" className="h-5 w-5 text-accent" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-lg mb-6 uppercase tracking-wider">ПРОТОКОЛЫ</h4>
              <ul className="space-y-3 text-foreground/60">
                <li className="hover:text-primary transition-colors cursor-pointer">• ИИ Диагностика</li>
                <li className="hover:text-primary transition-colors cursor-pointer">• Лазерная хирургия</li>
                <li className="hover:text-primary transition-colors cursor-pointer">• Nano имплантация</li>
                <li className="hover:text-primary transition-colors cursor-pointer">• Плазма терапия</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold text-lg mb-6 uppercase tracking-wider">КОНТАКТЫ</h4>
              <div className="space-y-3 text-foreground/60">
                <p className="font-space-mono">+7 (495) NEXUS-01</p>
                <p className="font-space-mono">nexus@dental.matrix</p>
                <p>МОСКВА • ЦЕНТР ГОРОДА<br />КООРДИНАТЫ: 55.7558° N</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/30 mt-12 pt-8 text-center">
            <p className="text-foreground/40 font-space-mono">
              © 2024 NEXUS DENTAL • ТЕХНОЛОГИИ БУДУЩЕГО УЖЕ СЕГОДНЯ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;