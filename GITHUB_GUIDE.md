# Como Colocar o Prospector One no GitHub

## 📋 Pré-requisitos
- Uma conta no GitHub (crie gratuitamente em [github.com](https://github.com))
- Acesso ao projeto Lovable

## 🚀 Método 1: Conectar Diretamente pelo Lovable (RECOMENDADO)

Este é o método mais simples e mantém sincronização automática entre Lovable e GitHub.

### Passo 1: Conectar ao GitHub
1. No editor do Lovable, clique no botão **GitHub** no canto superior direito
2. Selecione **"Connect to GitHub"**
3. Autorize o Lovable GitHub App na tela que abrir
4. Selecione a conta/organização GitHub onde quer criar o repositório

### Passo 2: Criar o Repositório
1. Após autorizar, clique em **"Create Repository"** no Lovable
2. Um novo repositório será criado automaticamente com todo o código do projeto
3. Pronto! Agora você tem sincronização automática em tempo real

### ✅ Vantagens deste método:
- ✨ Sincronização bidirecional automática
- 🔄 Mudanças no Lovable aparecem automaticamente no GitHub
- 💻 Você pode editar no GitHub e ver as mudanças no Lovable
- 🚀 Sem necessidade de comandos Git manuais

## 📝 Método 2: Exportar Manualmente (Alternativo)

Se preferir controle manual total:

### Passo 1: Baixar o Código
1. No Lovable, vá em Dev Mode
2. Clone ou baixe o código do projeto

### Passo 2: Criar Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `prospector-one-landing`
3. Descrição: "Landing page de alta conversão para o Prospector One"
4. Escolha **Public** ou **Private**
5. NÃO inicialize com README (já temos um)
6. Clique em **"Create repository"**

### Passo 3: Fazer Push do Código
Execute estes comandos no terminal (na pasta do projeto):

```bash
# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: landing page inicial do Prospector One"

# Conectar ao repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/prospector-one-landing.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

## 🌐 Próximos Passos Após Conectar

### 1. Deploy Automático
Após conectar ao GitHub, você pode fazer deploy em:
- **Vercel**: Conecte seu repo GitHub e deploy automático
- **Netlify**: Conecte seu repo GitHub e deploy automático
- **GitHub Pages**: Gratuito, direto do repositório

### 2. Colaboração
- Adicione colaboradores no GitHub
- Configure branch protection rules
- Use Pull Requests para revisar mudanças

### 3. CI/CD
- Configure GitHub Actions para testes automáticos
- Automatize o deploy em produção
- Configure checks de qualidade de código

## 🔧 Comandos Git Úteis

```bash
# Ver status das mudanças
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "sua mensagem"

# Enviar para GitHub
git push

# Puxar mudanças do GitHub
git pull

# Ver histórico
git log
```

## 📦 Estrutura do Projeto no GitHub

```
prospector-one-landing/
├── src/
│   ├── components/      # Todos os componentes React
│   │   ├── HeroSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ...
│   ├── pages/          # Páginas da aplicação
│   ├── assets/         # Imagens e recursos
│   └── index.css       # Estilos globais
├── public/             # Arquivos públicos
├── index.html          # HTML principal
├── package.json        # Dependências
├── tailwind.config.ts  # Configuração Tailwind
└── vite.config.ts      # Configuração Vite
```

## 💡 Dicas Importantes

1. **Use o Método 1**: A integração direta do Lovable é muito mais simples
2. **Commits Descritivos**: Use mensagens claras nos commits
3. **Branches**: Crie branches para features novas
4. **Backup**: GitHub serve como backup automático do seu código
5. **Documentação**: Mantenha o README atualizado

## 🆘 Problemas Comuns

### "Permission denied"
- Verifique se você tem permissão no repositório
- Tente usar HTTPS ao invés de SSH

### "Repository not found"
- Confirme se o nome do repositório está correto
- Verifique se você tem acesso ao repositório

### Conflitos ao fazer push
```bash
# Puxar mudanças primeiro
git pull origin main

# Resolver conflitos manualmente
# Depois fazer commit e push
git push
```

## 📚 Recursos Adicionais

- [Documentação Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Lovable Docs - GitHub Integration](https://docs.lovable.dev/)

---

**Pronto!** Agora seu projeto Prospector One está no GitHub e você pode colaborar, fazer deploy e manter backup automático. 🎉
