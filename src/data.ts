import type { Service, TeamMember, Milestone, Testimonial, StatItem } from './types';

export const statsData: StatItem[] = [
  {
    id: 'stat-1',
    value: '120+',
    label: 'Başarılı Proje',
    description: 'Dünya genelinde teslim ettiğimiz, yüksek performanslı ve modern dijital ürünler.'
  },
  {
    id: 'stat-2',
    value: '%98',
    label: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizle kurduğumuz uzun soluklu, güvene ve şeffaflığa dayalı ortaklıklar.'
  },
  {
    id: 'stat-3',
    value: '8+',
    label: 'Sektörel Deneyim',
    description: 'Değişen teknoloji trendlerine öncülük eden, köklü ve dinamik mühendislik geçmişi.'
  },
  {
    id: 'stat-4',
    value: '25+',
    label: 'Uzman Ekip',
    description: 'Alanında uzman tasarımcılar, yazılım mimarları ve dijital stratejistlerden oluşan kadro.'
  }
];

export const servicesData: Service[] = [
  {
    slug: 'modern-web-gelistirme',
    title: 'Yüksek Performanslı Web Geliştirme',
    subtitle: 'Hızlı, SEO Odaklı ve Ölçeklenebilir Web Uygulamaları',
    iconName: 'Cpu',
    shortDescription: 'En modern teknolojiler (Vite, React, Astro) ile Lighthouse skorları %95+ olan, ultra hızlı ve responsive web siteleri tasarlıyoruz.',
    longDescription: 'Dijital dünyada ilk izlenim milisaniyelerle ölçülür. Astra Digital olarak geleneksel, hantal ve yavaş şablonları bir kenara bırakıyoruz. En güncel derleme araçları, statik site oluşturucuları ve dinamik ada mimarilerini kullanarak, kullanıcılara roket hızında deneyimler sunuyoruz. Sadece görsel olarak etkileyici değil, aynı zamanda teknik olarak kusursuz, arama motorlarında zirveye oynayan web uygulamaları inşa ediyoruz.',
    category: 'Mühendislik & Yazılım',
    features: [
      'Lighthouse performans skorlarında 95+ garanti',
      'Tamamen responsive, mobil öncelikli arayüzler',
      'SEO uyumlu semantik HTML yapısı',
      'Modern animasyonlar ve mikro etkileşimler',
      'Gelişmiş güvenlik ve SSL sertifikalandırma'
    ],
    steps: [
      { title: 'Keşif ve Analiz', description: 'İhtiyaçlarınızı ve hedef kitlenizi analiz ederek en uygun teknolojik altyapıyı belirliyoruz.' },
      { title: 'Özgün UI/UX Tasarımı', description: 'Markanıza özel, kullanıcıyı merkeze alan modern arayüz tasarımları hazırlıyoruz.' },
      { title: 'Yüksek Performanslı Kodlama', description: 'Clean-code prensipleriyle, en hızlı framework altyapıları kullanarak kodlamayı yapıyoruz.' },
      { title: 'Test ve Optimizasyon', description: 'Tarayıcı uyumluluğu, SEO kriterleri ve hız testlerini gerçekleştirerek yayına hazırlıyoruz.' }
    ]
  },
  {
    slug: 'yapay-zeka-entegrasyonu',
    title: 'Yapay Zeka & Otomasyon Entegrasyonu',
    subtitle: 'Akıllı İş Süreçleri ve Veri Analitiği',
    iconName: 'Sparkles',
    shortDescription: 'İşletmenizin operasyonel yükünü azaltacak, veri analizini otomatikleştirecek ve müşteri deneyimini yapay zeka ile akıllandıracak sistemler kuruyoruz.',
    longDescription: 'Yapay zeka teknolojileri artık bir lüks değil, rekabette kalmanın en temel şartıdır. Büyük Dil Modelleri (LLM), üretken yapay zeka ve makine öğrenimi algoritmalarını mevcut iş süreçlerinize kusursuzca entegre ediyoruz. Müşteri destek botlarından akıllı veri analizi panellerine, süreç otomasyonlarından özel yapay zeka ajanlarına kadar tüm iş akışınızı geleceğe hazırlıyoruz.',
    category: 'Yapay Zeka & Akıllı Sistemler',
    features: [
      'Özel eğitilmiş yapay zeka destekli müşteri temsilcileri',
      'Otomatik raporlama ve veri analiz sistemleri',
      'İş akışı otomasyonları (RPA)',
      'LLM (Gemini, GPT) entegrasyonları',
      'Veriye dayalı tahminleme modelleri'
    ],
    steps: [
      { title: 'Süreç Analizi', description: 'İşletmenizde otomatize edilebilecek ve AI ile güçlendirilebilecek alanları keşfediyoruz.' },
      { title: 'Prototipleme', description: 'Seçilen modellerle hızlı bir kavram kanıtlama (PoC) çalışması yapıyoruz.' },
      { title: 'Entegrasyon', description: 'AI sistemini mevcut API ve veritabanı altyapınıza güvenli bir şekilde bağlıyoruz.' },
      { title: 'Eğitim ve İzleme', description: 'Ekiplerinize eğitimler veriyor ve sistem çıktılarının doğruluğunu sürekli optimize ediyoruz.' }
    ]
  },
  {
    slug: 'dijital-marka-ve-ux-tasarim',
    title: 'Dijital Marka & UX/UI Tasarım',
    subtitle: 'Kullanıcı Odaklı, Estetik ve Dönüşüm Sağlayan Tasarımlar',
    iconName: 'Palette',
    shortDescription: 'Markanızın dijitaldeki kimliğini baştan tanımlıyor; estetiği yüksek, kullanımı kolay ve dönüşüm oranlarını artıran özgün tasarımlar üretiyoruz.',
    longDescription: 'Harika bir yazılım, kötü bir kullanıcı deneyimiyle birleştiğinde başarısızlığa mahkumdur. Biz, estetik ile işlevselliği kusursuz bir dengede buluşturuyoruz. Kullanıcı alışkanlıklarını derinlemesine inceleyerek, onların dijital yolculuklarını en konforlu ve yönlendirici şekilde tasarlıyoruz. Markanızın değerlerini yansıtan, modern, minimal ve akılda kalıcı dijital kimlikler inşa ediyoruz.',
    category: 'Tasarım & Strateji',
    features: [
      'Kullanıcı davranış araştırmaları ve kullanıcı testleri',
      'Modern, minimalist ve özgün arayüz (UI) tasarımları',
      'Detaylı tasarım sistemleri (Design System) oluşturma',
      'Etkileşimli yüksek sadakatli prototipler',
      'Erişilebilirlik (A11y - WCAG) standartlarına tam uyum'
    ],
    steps: [
      { title: 'Araştırma & Persona', description: 'Hedef kullanıcının alışkanlıklarını, ihtiyaçlarını ve acı noktalarını belirliyoruz.' },
      { title: 'Bilgi Mimarisi & Tel Çerçeve', description: 'Ekranların iskelet yapısını ve akış şemalarını oluşturuyoruz.' },
      { title: 'Görsel Tasarım', description: 'Renk teorisi, tipografi ve modern grid yapılarıyla markanıza özel görsel dili tasarlıyoruz.' },
      { title: 'Mikro Etkileşimler', description: 'Kullanıcı deneyimini zenginleştiren, akıcı ve doğal animasyonları kurguluyoruz.' }
    ]
  },
  {
    slug: 'mobil-uygulama-gelistirme',
    title: 'Mobil Uygulama Geliştirme',
    subtitle: 'iOS ve Android İçin Akıcı ve Güçlü Mobil Çözümler',
    iconName: 'Smartphone',
    shortDescription: 'Kullanıcıların elinden düşürmeyeceği, yüksek performanslı, cihaz özellikleriyle tam entegre çalışabilen native ve hibrit mobil uygulamalar geliştiriyoruz.',
    longDescription: 'Mobil dünyada hız ve akıcılık her şeydir. React Native, Flutter veya native diller kullanarak hem iOS hem de Android platformlarında en yüksek performansta çalışan, batarya ve bellek dostu mobil uygulamalar üretiyoruz. Uygulama mağazalarındaki (App Store, Google Play) yayınlama süreçlerini uçtan uca yönetiyor, uygulamanızın başarısı için sürekli güncellemeler sunuyoruz.',
    category: 'Mühendislik & Yazılım',
    features: [
      'iOS ve Android için tek kod tabanıyla yüksek performans',
      'Çevrimdışı (offline-first) çalışma desteği',
      'Biyometrik doğrulama ve bildirim (push) entegrasyonları',
      'App Store ve Google Play yayınlama ve optimizasyon desteği',
      'Güvenli veri depolama ve API mimarisi'
    ],
    steps: [
      { title: 'Mobil Strateji', description: 'Uygulamanın mobil dünyadaki konumunu ve gereksinimlerini planlıyoruz.' },
      { title: 'Arayüz Tasarımı', description: 'Dokunmatik ekran standartlarına uygun, pratik tek elle kullanım odaklı tasarımlar yapıyoruz.' },
      { title: 'Yazılım ve Entegrasyon', description: 'Mobil standartlara uygun, güvenli ve performans odaklı kodlama yapıyoruz.' },
      { title: 'Mağaza Teslimi', description: 'Uygulamayı mağaza kurallarına uygun şekilde hazırlayıp onay süreçlerini yönetiyoruz.' }
    ]
  },
  {
    slug: 'bulut-ve-devops-danismanligi',
    title: 'Bulut & DevOps Danışmanlığı',
    subtitle: 'Güvenli, Ölçeklenebilir ve Kesintisiz Altyapılar',
    iconName: 'Cloud',
    shortDescription: 'Modern bulut sistemleri (AWS, Google Cloud) ile altyapınızı modernize ediyor, otomatik dağıtım (CI/CD) süreçleriyle hızı optimize ediyoruz.',
    longDescription: 'Yazılımınız ne kadar iyi olursa olsun, sunucu altyapınız zayıfsa kesintiler kaçınılmazdır. Sistemlerinizi yüksek trafik altında dahi milisaniyeler içinde yanıt verecek, otomatik ölçeklenebilir bulut mimarilerine taşıyoruz. DevOps kültürünü iş akışınıza dahil ederek yazılım güncelleme süreçlerinizi tamamen otomatikleştiriyor, hata oranını sıfıra indiriyoruz.',
    category: 'Mühendislik & Yazılım',
    features: [
      'AWS, Google Cloud ve Azure mimari tasarımı',
      'Docker ve Kubernetes ile konteynerizasyon',
      'Sıfır kesintili (Zero-downtime) CI/CD süreçleri',
      'Sunucusuz (Serverless) mimarilerle maliyet optimizasyonu',
      '7/24 aktif izleme ve otomatik kurtarma mekanizmaları'
    ],
    steps: [
      { title: 'Altyapı Denetimi', description: 'Mevcut sunucu ve sistem altyapınızı güvenlik, hız ve maliyet açılarından inceliyoruz.' },
      { title: 'Mimari Tasarım', description: 'İhtiyaca uygun ölçeklenebilir ve yedekli bulut haritasını çiziyoruz.' },
      { title: 'Otomasyon ve Göç', description: 'Süreçleri CI/CD boru hatlarına bağlıyor ve verileri kesintisiz taşıyoruz.' },
      { title: 'Sürekli İzleme', description: 'Performans grafiklerini anlık izleyerek olası darboğazları önceden çözüyoruz.' }
    ]
  },
  {
    slug: 'arama-motoru-optimizasyonu-seo',
    title: 'Gelişmiş SEO & Performans Optimizasyonu',
    subtitle: 'Arama Motorlarında Organik Büyüme ve Zirve',
    iconName: 'TrendingUp',
    shortDescription: 'Sitenizin arama motorlarında görünürlüğünü artırmak için teknik SEO denetimleri yapıyor, yüklenme hızlarını optimize ederek organik trafiği katlıyoruz.',
    longDescription: 'Google aramalarında ilk sayfada yer almayan işletmeler, potansiyel müşterilerinin büyük bir kısmını rakiplerine kaptırır. SEO sadece anahtar kelimelerden ibaret değildir. Sayfa açılış hızı (Core Web Vitals), mobil uyumluluk, semantik yapı ve kullanıcı deneyimi gibi düzinelerce teknik kriteri kapsar. Sitenizi tepeden tırnağa optimize ederek hem arama botlarının hem de gerçek kullanıcıların seveceği bir hıza ve yapıya kavuşturuyoruz.',
    category: 'Tasarım & Strateji',
    features: [
      'Core Web Vitals kriterlerine %100 uyumluluk',
      'Detaylı teknik SEO denetimi ve hataların giderilmesi',
      'Zengin sonuçlar (Schema.org markup) yapılandırılması',
      'Gelişmiş hız ve görsel optimizasyonu',
      'İçerik stratejisi ve semantik kelime analizleri'
    ],
    steps: [
      { title: 'SEO Denetimi', description: 'Sitenizin arama motorlarındaki mevcut durumunu ve teknik engellerini analiz ediyoruz.' },
      { title: 'Teknik Optimizasyon', description: 'Görselleri küçültüyor, kod yapısını optimize ediyor ve Core Web Vitals skorlarını yükseltiyoruz.' },
      { title: 'İçerik Yapılandırması', description: 'Arama botlarının sayfaları en iyi şekilde anlaması için schema ve semantik etiketleri yerleştiriyoruz.' },
      { title: 'Raporlama', description: 'Kazandığınız sıralamaları ve organik trafik artışını şeffaf panellerle raporluyoruz.' }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Caner Özdemir',
    role: 'Kurucu Ortak & Teknoloji Direktörü (CTO)',
    bio: '12 yılı aşkın süredir modern web teknolojileri ve bulut mimarileri üzerine çalışan, açık kaynak kod sevdalısı yazılım mühendisi. Ekibin teknolojik vizyonunu belirliyor.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com/in/canerozdemir',
      github: 'https://github.com/canerozdemir',
      twitter: 'https://twitter.com/canertech'
    }
  },
  {
    id: 'team-2',
    name: 'Zeynep Aksoy',
    role: 'Kreatif Direktör & UI/UX Tasarımcı',
    bio: 'Kullanıcı dostu arayüzler ve marka kimliği üzerine uzmanlaşmış, estetik ve işlevselliği bir arada sunan tasarımlarıyla ulusal ödüllere sahip ödüllü tasarımcı.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com/in/zeynepaksoy',
      twitter: 'https://twitter.com/zeynepdesign'
    }
  },
  {
    id: 'team-3',
    name: 'Mert Yılmaz',
    role: 'Kıdemli Yapay Zeka Mühendisi',
    bio: 'Makine öğrenimi, doğal dil işleme ve veri madenciliği üzerine yoğunlaşmış araştırmacı. Şirketlerin iş süreçlerine entegre edilen akıllı algoritmaları geliştiriyor.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com/in/mertyilmaz',
      github: 'https://github.com/mertyilmaz-ai'
    }
  },
  {
    id: 'team-4',
    name: 'Elif Şahin',
    role: 'Proje Yöneticisi & Agile Koçu',
    bio: 'Yazılım süreçlerinin zamanında, bütçeye uygun ve yüksek kalitede teslim edilmesini sağlayan, Scrum ve Kanban metodolojilerinde uzman deneyimli yönetici.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    social: {
      linkedin: 'https://linkedin.com/in/elifsahin'
    }
  }
];

export const milestones: Milestone[] = [
  {
    id: 'ms-1',
    year: '2018',
    title: 'Kuruluş & Tohumlar',
    description: '3 kişilik heyecanlı bir mühendislik ekibiyle, butik dijital çözümler sunmak amacıyla İzmir\'de küçük bir ofiste kurulduk.'
  },
  {
    id: 'ms-2',
    year: '2020',
    title: 'Hızlı Büyüme & Pandemi Atılımı',
    description: 'Dijital dönüşümün hız kazanmasıyla birlikte ekibimizi 10 kişiye çıkardık ve ilk büyük ölçekli e-ticaret ve SaaS projelerimizi tamamladık.'
  },
  {
    id: 'ms-3',
    year: '2022',
    title: 'Globalleşme & İstanbul Ofisi',
    description: 'İstanbul ofisimizi açtık ve İngiltere, Almanya ve Hollanda başta olmak üzere yurt dışındaki ilk müşterilerimize hizmet vermeye başladık.'
  },
  {
    id: 'ms-4',
    year: '2024',
    title: 'AI Departmanı & Yeni Çağ',
    description: 'Bünyemizde özel bir Yapay Zeka Araştırma ve Entegrasyon birimi kurarak şirketlere üretken AI çözümleri sunan öncü ajanslardan biri olduk.'
  },
  {
    id: 'ms-5',
    year: '2026',
    title: 'Astra Digital: Geleceğe Hazırız',
    description: 'Bugün 25+ kişilik uzman ekibimizle, dünya standartlarında yüksek hızlı web, mobil ve akıllı yapay zeka sistemleri geliştirmeye devam ediyoruz.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmet Yılmaz',
    role: 'Kurucu / CEO',
    company: 'Solaria Enerji A.Ş.',
    text: 'Astra ekibiyle kurumsal web sitemizin yenilenmesi sürecinde çalıştık. Sitemizin hızı inanılmaz arttı, Google Lighthouse skorlarımız %99 seviyesine ulaştı. Satış temsilcilerimize gelen nitelikli organik form sayısında şimdiden %40 artış var.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'test-2',
    name: 'Ayşe Demirci',
    role: 'Pazarlama Direktörü (CMO)',
    company: 'Odin Fintech Solutions',
    text: 'Finansal web sitemizin kullanıcı deneyimi (UX) sıfırdan tasarlandı. Zeynep Hanım ve ekibi harika bir iş çıkardı. Artık müşterilerimiz karmaşık kredi hesaplamalarını tek bir tıkla, akıcı bir şekilde mobilde yapabiliyor. Teşekkürler Astra!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 'test-3',
    name: 'Mustafa Yıldız',
    role: 'Teknoloji Operasyonları Lideri',
    company: 'NextGen Retail Inc.',
    text: 'AWS altyapımızın Dockerize edilerek Kubernetes ortamına taşınması ve CI/CD süreçlerimizin otomatikleştirilmesi konusunda DevOps desteği aldık. Sadece 2 hafta içinde sistem kesintilerimiz tamamen sıfıra indi ve sunucu maliyetlerimizi %35 düşürdüler.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const partnerBrands = [
  { name: 'Solaria Enerji', logo: '☀️' },
  { name: 'Odin Fintech', logo: '🛡️' },
  { name: 'NextGen Retail', logo: '🛍️' },
  { name: 'Vortex Logistics', logo: '🌀' },
  { name: 'Aero Aerospace', logo: '✈️' }
];
