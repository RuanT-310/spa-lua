**Resumo das Aulas de Sistemas Distribuídos**  

### **Aula 1: Introdução e Conceitos Básicos**  
- **Definições**:  
  - Sistemas distribuídos são conjuntos de computadores independentes que se apresentam como um sistema único e coerente (Tanenbaum).  
  - Componentes localizados em máquinas distintas se comunicam via troca de mensagens (Coulouris).  
  - Desafios incluem falhas em componentes desconhecidos (Lamport). 

- **Objetivos**:  
  - **Compartilhamento de recursos** (dados, hardware).  
  - **Escalabilidade** (tamanho, geográfica, administrativa).  
  - **Transparência** (acesso, localização, replicação, falhas).  
  - **Disponibilidade e tolerância a falhas**.  

- **Tipos de Sistemas**:  
  - **Cluster** (homogêneo), **Grid** (heterogêneo), **Nuvem** (virtualização, elasticidade).  
  - **Ubíqua** (sensores integrados), **Móvel** (edge computing), **Redes de sensores**.  

- **Desafios**:  
  - Falhas de comunicação (split-brain), sincronização de relógios, consistência de dados.  
  - Soluções: replicação, quorum, algoritmos de consenso (ex: Paxos, Raft).  

---

### **Aula 2: Estilos Arquiteturais**  
1. **Arquiteturas em Camadas**:  
   - Componentes organizados hierarquicamente (ex: protocolos de rede).  
   - Exemplo: servidor/cliente em Python (sockets TCP).  
   - Três camadas típicas: interface, processamento, dados.  

2. **Arquitetura Orientada a Serviços (SOA)**:  
   - Serviços independentes com interfaces bem definidas (ex: APIs REST com operações GET/POST/PUT/DELETE).  
   - **Microserviços**: recursos gerenciados individualmente (escalabilidade).  

3. **Arquitetura Publicar-Assinar**:  
   - Desacoplamento temporal e referencial.  
   - **Baseada em tópicos** (ex: MQTT) ou **conteúdo** (eventos com filtros).  
   - Desafio: escalabilidade em assinaturas complexas.  

4. **Centralizadas vs. Descentralizadas**:  
   - **Cliente-Servidor** (ex: Netflix) vs. **P2P** (ex: BitTorrent).  
   - **Híbridas**: Combinação de centralização (tracker) e descentralização (swarm).  
   - **Blockchain**: Consenso distribuído (ex: Proof of Work/Stake), imutabilidade.  

---

### **Aula 3: Processos, Threads e Virtualização**  
- **Processos vs. Threads**:  
  - Processos: isolamento de memória, custo alto de criação.  
  - Threads: compartilham memória, custo baixo, mas vulneráveis a falhas.  
  - Modelos: N:1 (threads de usuário), 1:1 (kernel threads).  

- **Servidores Multithread**:  
  - **Modelo despachante/operário**: threads dedicadas para aceitar e processar requisições.  
  - Exemplo: servidores web (Apache, Nginx) com pools de threads.  

- **Virtualização**:  
  - **Máquinas virtuais** (VMs): isolamento completo (ex: VMware).  
  - **Contêineres**: leveza, compartilhamento de kernel (ex: Docker), namespaces e cgroups.  

- **Interação Cliente-Servidor**:  
  - **Stateless vs. Stateful**: servidores sem estado (HTTP) vs. com estado (sessões).  
  - **Clusters de servidores**: camadas para balanceamento (ex: frontend, aplicação, banco de dados).  

- **Migração de Código**:  
  - **Mobilidade fraca** (código + dados) vs. **forte** (estado de execução).  
  - Motivações: balanceamento de carga, proximidade com dados (edge computing).  

---

### **Conclusão**  
Sistemas distribuídos são fundamentais para aplicações modernas (web, IoT, nuvem), exigindo soluções para **escalabilidade**, **tolerância a falhas** e **consistência**. Arquiteturas como microserviços, P2P e blockchain ilustram a diversidade de abordagens, enquanto técnicas como virtualização e multithreading garantem eficiência. Desafios permanecem em sincronização, segurança e coordenação em larga escala.
