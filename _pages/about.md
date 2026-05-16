---
layout: about
title: About
permalink: /
subtitle: <a href='https://www.ox.ac.uk/'>University of Oxford</a>, Oxford, UK.

profile:
  align: left
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: false # custom flagship work section below replaces the default selected-paper list
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit:

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="language-switch home-language-switch star-home">
  <input class="lang-toggle-input" type="radio" name="home-lang" id="home-lang-en" checked>
  <input class="lang-toggle-input" type="radio" name="home-lang" id="home-lang-zh">
  <div class="lang-toggle-labels" aria-label="Homepage language">
    <label for="home-lang-en"><i class="fa-solid fa-language" aria-hidden="true"></i> English</label>
    <label for="home-lang-zh"><i class="fa-solid fa-language" aria-hidden="true"></i> 中文</label>
  </div>

  <div class="language-panels">
    <section class="lang-panel lang-panel-en" lang="en">
      <section class="star-hero">
        <div class="star-hero-copy">
          <div class="star-kicker">Grid intelligence for the AI era</div>
          <h2>Building the control layer for flexible, AI-native power systems.</h2>
          <p>
            I design optimization and AI methods that make flexible loads dependable enough for real grid operation: probabilistic guarantees, GPU-native computation, and validated AI data-centre response.
          </p>
          <div class="star-actions">
            <a href="/publications/" class="btn btn-sm z-depth-0 star-primary-action" role="button"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Publications</a>
            <a href="/cv/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> CV</a>
            <a href="/collaboration/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-handshake" aria-hidden="true"></i> Collaborate</a>
          </div>
        </div>
        <aside class="star-hero-proof" aria-label="Profile highlights">
          <div class="star-affiliation-card">
            <img src="/assets/img/oxford-crest.png" alt="University of Oxford crest">
            <span>Oxford</span>
            <strong>Postdoctoral Research Associate</strong>
            <p>Power Systems Architecture Lab</p>
          </div>
          <div>
            <span>2026</span>
            <strong>IEEE TIA + INFORMS JOC</strong>
            <p>Recent work spans AI data centres, chance constraints, and GPU-native grid computation.</p>
          </div>
          <div>
            <span>Verified</span>
            <strong>Real GPU experiments</strong>
            <p>Primary response from AI data centres tested on physical GPU hardware.</p>
          </div>
        </aside>
      </section>

      <section class="star-manifesto" aria-label="Research thesis">
        <div class="star-section-label">Research Thesis</div>
        <p>
          Future power systems will not be operated only by adding more forecasting and control dashboards. They will need a new algorithmic layer that turns millions of uncertain devices, fast AI infrastructure, and local markets into resources that grid operators can trust.
        </p>
      </section>

      <section class="star-proof-strip" aria-label="Research signals">
        <div>
          <span>100x+</span>
          <p>faster chance-constrained approximations</p>
        </div>
        <div>
          <span>1,000</span>
          <p>agents trained in GradMAP without parameter sharing</p>
        </div>
        <div>
          <span>10x+</span>
          <p>GPU-accelerated batched power-flow speedups</p>
        </div>
        <div>
          <span>2</span>
          <p>2026 IEEE special sessions chaired</p>
        </div>
      </section>

      <section class="star-section">
        <div class="star-section-heading">
          <span>Flagship Work</span>
          <h2>Representative work I am proud to be building on.</h2>
        </div>
        <div class="star-evidence-grid">
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2024strengthened">
            <img src="/assets/img/publication_preview/zhou2024strengthened.png" alt="Optimization method preview">
            <div>
              <span>INFORMS Journal on Computing · 2026</span>
              <strong>Faster joint chance constraints</strong>
              <p>Strengthened Wasserstein-robust approximation for large-scale decisions under uncertainty, with major speedups.</p>
            </div>
          </a>
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2026gradmap">
            <img src="/assets/img/publication_preview/zhou2026gradmap.png" alt="GradMAP method diagram">
            <div>
              <span>arXiv · 2026</span>
              <strong>GradMAP for grid-edge flexibility</strong>
              <p>Multi-agent proximal learning for 1,000 agents without parameter sharing, embedding three-phase AC load flow.</p>
            </div>
          </a>
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2026gridintelligent">
            <img src="/assets/img/publication_preview/zhou2026gridintelligent.png" alt="Power tracking curves for grid-intelligent AI data centres">
            <div>
              <span>IEEE Transactions on Industry Applications · 2026</span>
              <strong>Grid-Intelligent AI Data Centres for Primary Response</strong>
              <p>Shows how AI data centres can become fast grid resources, with validation on real GPUs.</p>
            </div>
          </a>
        </div>
      </section>

      <section class="star-section">
        <div class="star-section-heading">
          <span>Current Agenda</span>
          <h2>Three questions driving the next stage.</h2>
        </div>
        <div class="star-agenda-grid">
          <article>
            <i class="fa-solid fa-server" aria-hidden="true"></i>
            <h3>Can AI infrastructure support the grid it depends on?</h3>
            <p>Designing power-aware workload control and flexibility products for AI/HPC data centres.</p>
          </article>
          <article>
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
            <h3>Can learning agents be made safe enough for energy systems?</h3>
            <p>Combining optimization structure, probabilistic safety, and multi-agent learning.</p>
          </article>
          <article>
            <i class="fa-solid fa-microchip" aria-hidden="true"></i>
            <h3>Can grid computation become AI-native?</h3>
            <p>Building batched, accelerator-ready power-flow and dispatch tools for modern AI ecosystems.</p>
          </article>
        </div>
      </section>

      <section class="star-section star-leadership">
        <div>
          <span>Leadership & Service</span>
          <h2>Active in the emerging AI-for-energy community.</h2>
        </div>
        <ul>
          <li>Panelist, IEEE PES International Meeting 2026, Hong Kong.</li>
          <li>Special Session Chair, IEEE I&CPS Asia 2026, Kunming.</li>
          <li>Special Session Chair, IEEE EI<sup>2</sup> 2026, Shanghai.</li>
          <li>Organiser and chair, Oxford Workshop on Safeguarded AI Agents for Grid-Edge Flexibility.</li>
        </ul>
      </section>

      <section class="star-cv-band">
        <div>
          <span>CV & Background</span>
          <h2>PhD in grid flexibility, MSc in AI, now building at the interface of both.</h2>
          <p>
            PhD, University of Edinburgh, 2025. Visiting PhD Student at Oxford, 2024--2025. Current postdoctoral work is part of ARIA SAGEflex at the University of Oxford.
          </p>
        </div>
        <div class="star-actions">
          <a href="/assets/pdf/Yihong_Zhou_CV_en.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> English CV</a>
          <a href="/assets/pdf/Yihong_Zhou_CV_zh.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> 中文 CV</a>
        </div>
      </section>
    </section>

    <section class="lang-panel lang-panel-zh" lang="zh-Hans">
      <section class="star-hero">
        <div class="star-hero-copy">
          <div class="star-kicker">面向 AI 时代的电网智能</div>
          <h2>构建面向灵活性资源与 AI 基础设施的电力系统控制层。</h2>
          <p>
            我的研究目标是让灵活负载真正成为电网可以信任的资源：结合概率安全保证、GPU 原生计算和真实 AI 数据中心响应实验，推进可部署的电网智能。
          </p>
          <div class="star-actions">
            <a href="/publications/" class="btn btn-sm z-depth-0 star-primary-action" role="button"><i class="fa-solid fa-book-open" aria-hidden="true"></i> 论文</a>
            <a href="/cv/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> 简历</a>
            <a href="/collaboration/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-handshake" aria-hidden="true"></i> 合作</a>
          </div>
        </div>
        <aside class="star-hero-proof" aria-label="个人亮点">
          <div class="star-affiliation-card">
            <img src="/assets/img/oxford-crest.png" alt="University of Oxford crest">
            <span>Oxford</span>
            <strong>牛津大学博士后研究员</strong>
            <p>Power Systems Architecture Lab</p>
          </div>
          <div>
            <span>2026</span>
            <strong>IEEE TIA + INFORMS JOC</strong>
            <p>近期工作覆盖 AI 数据中心、机会约束优化和 GPU 原生电网计算。</p>
          </div>
          <div>
            <span>验证</span>
            <strong>真实 GPU 实验</strong>
            <p>在物理 GPU 硬件上验证 AI 数据中心一次调频响应。</p>
          </div>
        </aside>
      </section>

      <section class="star-manifesto" aria-label="研究主线">
        <div class="star-section-label">研究主线</div>
        <p>
          未来电力系统不能只依赖更多预测和更多控制面板。真正关键的是一层新的算法基础设施：把海量不确定设备、快速变化的 AI 基础设施和本地市场，转化为电网运行者能够信任的灵活性资源。
        </p>
      </section>

      <section class="star-proof-strip" aria-label="研究信号">
        <div>
          <span>100x+</span>
          <p>机会约束近似加速</p>
        </div>
        <div>
          <span>1,000</span>
          <p>GradMAP 中无参数共享训练的智能体</p>
        </div>
        <div>
          <span>10x+</span>
          <p>GPU 批量潮流计算加速</p>
        </div>
        <div>
          <span>2</span>
          <p>2026 IEEE special session chair</p>
        </div>
      </section>

      <section class="star-section">
        <div class="star-section-heading">
          <span>代表性工作</span>
          <h2>我最想持续往下推进的几条研究线。</h2>
        </div>
        <div class="star-evidence-grid">
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2024strengthened">
            <img src="/assets/img/publication_preview/zhou2024strengthened.png" alt="Optimization method preview">
            <div>
              <span>INFORMS Journal on Computing · 2026</span>
              <strong>更快的联合机会约束近似</strong>
              <p>面向大规模不确定性决策的 Wasserstein 鲁棒优化方法，显著降低计算难度。</p>
            </div>
          </a>
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2026gradmap">
            <img src="/assets/img/publication_preview/zhou2026gradmap.png" alt="GradMAP method diagram">
            <div>
              <span>arXiv · 2026</span>
              <strong>面向电网边缘灵活性的 GradMAP</strong>
              <p>1000 个智能体、无参数共享训练，并嵌入三相交流潮流计算。</p>
            </div>
          </a>
          <a class="star-evidence-card star-evidence-card-large" href="/publications/#zhou2026gridintelligent">
            <img src="/assets/img/publication_preview/zhou2026gridintelligent.png" alt="AI data centre power tracking curves">
            <div>
              <span>IEEE Transactions on Industry Applications · 2026</span>
              <strong>Grid-Intelligent AI Data Centres for Primary Response</strong>
              <p>展示 AI 数据中心如何成为快速电网资源，并在真实 GPU 上完成验证。</p>
            </div>
          </a>
        </div>
      </section>

      <section class="star-section">
        <div class="star-section-heading">
          <span>当前议题</span>
          <h2>下一阶段围绕三个问题展开。</h2>
        </div>
        <div class="star-agenda-grid">
          <article>
            <i class="fa-solid fa-server" aria-hidden="true"></i>
            <h3>AI 基础设施能否支撑其所依赖的电网？</h3>
            <p>研究面向 AI/HPC 数据中心的电力感知工作负载控制和灵活性产品。</p>
          </article>
          <article>
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
            <h3>学习型智能体能否安全进入能源系统？</h3>
            <p>结合优化结构、概率安全保证和多智能体学习方法。</p>
          </article>
          <article>
            <i class="fa-solid fa-microchip" aria-hidden="true"></i>
            <h3>电网计算能否成为 AI 原生工具？</h3>
            <p>构建批量化、可加速的潮流与调度工具，融入现代 AI 生态。</p>
          </article>
        </div>
      </section>

      <section class="star-section star-leadership">
        <div>
          <span>学术领导力与服务</span>
          <h2>积极参与 AI for Energy 新兴学术社区。</h2>
        </div>
        <ul>
          <li>IEEE PES International Meeting 2026 圆桌嘉宾，香港。</li>
          <li>IEEE I&CPS Asia 2026 Special Session Chair，昆明。</li>
          <li>IEEE EI<sup>2</sup> 2026 Special Session Chair，上海。</li>
          <li>Oxford Workshop on Safeguarded AI Agents for Grid-Edge Flexibility 组织者与主席。</li>
        </ul>
      </section>

      <section class="star-cv-band">
        <div>
          <span>简历与背景</span>
          <h2>博士研究电网灵活性，硕士训练人工智能，现在连接二者。</h2>
          <p>
            2025 年获爱丁堡大学博士学位，2024--2025 年曾在牛津大学访问。目前在牛津大学 ARIA SAGEflex 项目中开展博士后研究。
          </p>
        </div>
        <div class="star-actions">
          <a href="/assets/pdf/Yihong_Zhou_CV_en.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> English CV</a>
          <a href="/assets/pdf/Yihong_Zhou_CV_zh.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> 中文 CV</a>
        </div>
      </section>
    </section>
  </div>
</div>
