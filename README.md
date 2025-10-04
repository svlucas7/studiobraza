# Studio Braza - Landing Page

Um site moderno e responsivo para o Studio Braza, desenvolvido seguindo as melhores práticas de engenharia de software.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design responsivo com CSS Grid e Flexbox
- **JavaScript ES6+** - Interatividade e funcionalidades dinâmicas
- **Webpack 5** - Bundling e otimização de assets
- **Babel** - Transpilação para compatibilidade com browsers antigos
- **PostCSS** - Processamento avançado de CSS
- **ESLint** - Linting para JavaScript
- **Stylelint** - Linting para CSS
- **Prettier** - Formatação consistente de código

## 📁 Estrutura do Projeto

```
studiobraza/
├── src/                          # Código fonte
│   ├── index.html               # HTML principal
│   ├── js/                      # JavaScript
│   │   └── main.js             # Script principal
│   ├── styles/                  # Estilos CSS
│   │   ├── main.css            # CSS principal
│   │   ├── base/               # Estilos base
│   │   │   ├── variables.css   # Variáveis CSS
│   │   │   ├── reset.css       # Reset CSS
│   │   │   └── utilities.css   # Classes utilitárias
│   │   ├── components/         # Componentes UI
│   │   │   └── ui.css          # Botões, forms, modais
│   │   └── sections/           # Estilos por seção
│   │       ├── header-hero.css # Header e hero
│   │       ├── main-content.css# Conteúdo principal
│   │       └── faq-cta.css     # FAQ e CTA
│   └── assets/                 # Assets estáticos
│       ├── images/             # Imagens
│       ├── icons/              # Ícones
│       └── fonts/              # Fontes
├── config/                     # Configurações
│   ├── webpack.common.js       # Config comum do Webpack
│   ├── webpack.dev.js          # Config de desenvolvimento
│   └── webpack.prod.js         # Config de produção
├── dist/                       # Build de produção
├── .eslintrc.js               # Configuração ESLint
├── .stylelintrc.js            # Configuração Stylelint
├── .prettierrc                # Configuração Prettier
├── .gitignore                 # Git ignore
├── package.json               # Dependências e scripts
└── README.md                  # Documentação
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/studiobraza.git
cd studiobraza
```

2. Instale as dependências:
```bash
npm install
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run watch        # Modo watch para desenvolvimento

# Build
npm run build        # Build de produção
npm run build:dev    # Build de desenvolvimento

# Qualidade de código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige erros do ESLint automaticamente
npm run lint:css     # Executa Stylelint
npm run lint:css:fix # Corrige erros do Stylelint automaticamente
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação

# Limpeza
npm run clean        # Remove build anterior

# Deploy
npm run deploy       # Build e deploy (configurar conforme necessário)
```

## 🎨 Funcionalidades

### Design System
- **Cores**: Paleta moderna com verde primário (#C1FF00)
- **Tipografia**: Hierarquia clara com Inter font
- **Espaçamento**: Sistema consistente baseado em rem
- **Componentes**: Botões, formulários, cards e modais reutilizáveis

### Seções da Página
- **Header**: Navegação responsiva com menu mobile
- **Hero**: Apresentação impactante com CTA
- **Sobre**: Informações sobre o studio
- **Serviços**: Grid de serviços oferecidos
- **Portfólio**: Galeria de trabalhos
- **Processo**: Fluxo de trabalho em etapas
- **Depoimentos**: Carrossel de avaliações
- **FAQ**: Acordeão com perguntas frequentes
- **Contato**: Modal com formulário

### Interatividade
- Menu mobile responsivo
- Modal de contato
- FAQ em acordeão
- Carrossel de imagens
- Scroll suave entre seções
- Validação de formulários
- Animações on scroll

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## ♿ Acessibilidade

- Marcação semântica HTML5
- Atributos ARIA adequados
- Contraste de cores adequado
- Navegação por teclado
- Texto alternativo para imagens
- Foco visível nos elementos interativos

## 🔧 Configuração de Desenvolvimento

### ESLint
Configurado com regras do Airbnb para manter qualidade do código JavaScript.

### Stylelint
Regras para CSS consistente e de qualidade.

### Prettier
Formatação automática para manter código limpo.

### Webpack
- **Desenvolvimento**: Hot reload, source maps
- **Produção**: Minificação, otimização de assets, code splitting

## 🚀 Deploy

O projeto está configurado para deploy em:
- **Netlify**: Configuração automática via `package.json`
- **Vercel**: Deploy direto do repositório
- **GitHub Pages**: Via GitHub Actions

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados ficam na pasta `dist/` prontos para deploy.

## 📊 Performance

- **CSS**: Minificado e otimizado
- **JavaScript**: Transpilado e minificado
- **Imagens**: Otimização automática via Webpack
- **Loading**: Lazy loading para imagens
- **Caching**: Headers de cache configurados

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 📞 Contato

Studio Braza - [contato@studiobraza.com](mailto:contato@studiobraza.com)

Link do Projeto: [https://github.com/seuusuario/studiobraza](https://github.com/seuusuario/studiobraza)

---

**Desenvolvido com ❤️ seguindo as melhores práticas de engenharia de software**