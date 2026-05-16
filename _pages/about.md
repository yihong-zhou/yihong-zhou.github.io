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

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="language-switch home-language-switch">
  <input class="lang-toggle-input" type="radio" name="home-lang" id="home-lang-en" checked>
  <input class="lang-toggle-input" type="radio" name="home-lang" id="home-lang-zh">
  <div class="lang-toggle-labels" aria-label="Homepage language">
    <label for="home-lang-en"><i class="fa-solid fa-language" aria-hidden="true"></i> English</label>
    <label for="home-lang-zh"><i class="fa-solid fa-language" aria-hidden="true"></i> 中文</label>
  </div>

  <div class="language-panels">
    <section class="lang-panel lang-panel-en" lang="en">
      <section class="home-hero-panel">
        <div class="home-hero-copy">
          <div class="home-kicker">Power systems · optimization · trustworthy AI</div>
          <h2>Safe, scalable decision-making for grid-edge flexibility.</h2>
          <p class="home-lede">
            I am a Postdoctoral Research Associate at the University of Oxford, building uncertainty-aware AI and optimization methods that help distributed energy resources, AI data centres, and local flexibility markets operate reliably at scale.
          </p>
          <div class="home-chip-row" aria-label="Research keywords">
            <span>Grid-edge AI</span>
            <span>Chance constraints</span>
            <span>Data-centre flexibility</span>
            <span>Market-compatible control</span>
          </div>
          <div class="home-action-row">
            <a href="/collaboration/" class="btn btn-sm z-depth-0 home-primary-action" role="button"><i class="fa-solid fa-handshake" aria-hidden="true"></i> Collaborate</a>
            <a href="/publications/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Publications</a>
            <a href="/cv/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> CV</a>
          </div>
        </div>
        <div class="home-hero-meta">
          <img src="/assets/img/oxford-crest.png" alt="University of Oxford crest" class="home-hero-crest" />
          <div>
            <div class="home-meta-label">Current position</div>
            <strong>Postdoctoral Research Associate</strong>
            <span>Department of Engineering Science, University of Oxford</span>
          </div>
          <div class="home-meta-list">
            <span>ARIA SAGEflex project</span>
            <span>Oxford Power Systems Architecture Lab</span>
            <span>Open to academic and industry collaboration</span>
          </div>
        </div>
      </section>

      <section class="home-impact-grid" aria-label="Research snapshot">
        <div class="home-impact-item">
          <span>2026</span>
          <strong>4 recent papers</strong>
          <p>IEEE TIA, INFORMS Journal on Computing, and two new arXiv preprints.</p>
        </div>
        <div class="home-impact-item">
          <span>15 min</span>
          <strong>Fast training</strong>
          <p>GradMAP trains decentralised policies for 1,000 grid-edge agents in the reported case study.</p>
        </div>
        <div class="home-impact-item">
          <span>100x+</span>
          <strong>Optimization speedups</strong>
          <p>SFLA and FICA target tractable chance-constrained power-system decisions.</p>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>Research focus</span>
          <h2>From rigorous guarantees to deployable flexibility.</h2>
        </div>
        <div class="home-focus-grid">
          <article>
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
            <h3>Reliable flexibility aggregation</h3>
            <p>Distributionally robust and chance-constrained methods for coordinating many uncertain devices without losing delivery guarantees.</p>
          </article>
          <article>
            <i class="fa-solid fa-bolt" aria-hidden="true"></i>
            <h3>AI data centres as grid assets</h3>
            <p>Power-system-aware control of AI/HPC workloads, including real GPU experiments for primary response.</p>
          </article>
          <article>
            <i class="fa-solid fa-network-wired" aria-hidden="true"></i>
            <h3>AI-native power-flow computation</h3>
            <p>GPU-accelerated and differentiable power-system tools that integrate cleanly with modern AI ecosystems.</p>
          </article>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>Recent papers</span>
          <h2>New work now on the publications page.</h2>
        </div>
        <div class="recent-paper-grid">
          <a class="recent-paper-card" href="/publications/#zhou2026gridintelligent">
            <span>IEEE TIA · 2026</span>
            <strong>Grid-Intelligent AI Data Centres for Primary Response</strong>
            <p>Real GPU validation and RL-based control for fast grid services.</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2024strengthened">
            <span>INFORMS JOC · 2026</span>
            <strong>Strengthened and Faster Linear Approximation to Joint Chance Constraints</strong>
            <p>Tractable Wasserstein robust joint chance constraints for large-scale decisions.</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2026gradmap">
            <span>arXiv · 2026</span>
            <strong>GradMAP for Grid-Edge Flexibility</strong>
            <p>Decentralised multi-agent learning with embedded AC network physics.</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2026jaxpf">
            <span>arXiv · 2026</span>
            <strong>JAX-Based Batched AC Power Flow</strong>
            <p>Accelerator-ready power-flow evaluation for AI-integrated operations.</p>
          </a>
        </div>
      </section>

      <section class="home-cv-band">
        <div>
          <span>CV</span>
          <h2>English and Chinese CVs are available.</h2>
          <p>The CV page now embeds both versions, with the TeX source included in this repository.</p>
        </div>
        <div class="home-action-row">
          <a href="/assets/pdf/Yihong_Zhou_CV_en.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> English PDF</a>
          <a href="/assets/pdf/Yihong_Zhou_CV_zh.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> 中文 PDF</a>
          <a href="/assets/cv/Yihong-Zhou-CV/main.tex" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-code" aria-hidden="true"></i> TeX</a>
        </div>
      </section>

      <section class="home-section compact-bio">
        <div class="bio-summary">
          <p>
            I completed my <strong>PhD</strong> at the <strong>University of Edinburgh</strong> (2021--2025), supervised by Prof. Thomas Morstyn, Prof. Gareth Harrison, and Dr. Wei Sun. My thesis focused on <em>Unlocking Grid Flexibility of Distributed Energy Resources</em>. I was also a Visiting PhD Student at Oxford from 2024 to 2025.
          </p>
          <p>
            I am interested in scalable and reliable decision-making methods for power-system operation, including probabilistic safety guarantees, robust optimization under distribution shift, and the role of emerging resources such as AI data centres in future power systems.
          </p>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>Education</span>
          <h2>Training across power systems and AI.</h2>
        </div>
        <div class="education-timeline">
          <div class="education-item">
            <div class="edu-year">2025</div>
            <div class="edu-content">
              <h5>PhD, University of Edinburgh</h5>
              <p>Thesis: <em>Unlocking Grid Flexibility of Distributed Energy Resources</em></p>
            </div>
            <div class="edu-logo"><img src="/assets/img/edinburgh-crest.png" alt="University of Edinburgh crest" class="uni-crest" /></div>
          </div>
          <div class="education-item">
            <div class="edu-year">2021</div>
            <div class="edu-content">
              <h5>MSc (Distinction), University of Edinburgh</h5>
            </div>
            <div class="edu-logo"><img src="/assets/img/edinburgh-crest.png" alt="University of Edinburgh crest" class="uni-crest" /></div>
          </div>
          <div class="education-item">
            <div class="edu-year">2020</div>
            <div class="edu-content">
              <h5>BEng, North China Electric Power University</h5>
            </div>
            <div class="edu-logo"><img src="/assets/img/ncepu-crest.png" alt="North China Electric Power University crest" class="uni-crest" /></div>
          </div>
        </div>
      </section>
    </section>

    <section class="lang-panel lang-panel-zh" lang="zh-Hans">
      <section class="home-hero-panel">
        <div class="home-hero-copy">
          <div class="home-kicker">电力系统 · 优化 · 可信人工智能</div>
          <h2>面向电网边缘灵活性的安全、可扩展决策方法。</h2>
          <p class="home-lede">
            我目前在牛津大学工程科学系担任博士后研究员，研究不确定性下的人工智能与优化方法，帮助分布式能源、AI 数据中心和本地灵活性市场实现可靠、可扩展运行。
          </p>
          <div class="home-chip-row" aria-label="研究关键词">
            <span>电网边缘 AI</span>
            <span>机会约束</span>
            <span>数据中心灵活性</span>
            <span>市场兼容控制</span>
          </div>
          <div class="home-action-row">
            <a href="/collaboration/" class="btn btn-sm z-depth-0 home-primary-action" role="button"><i class="fa-solid fa-handshake" aria-hidden="true"></i> 合作</a>
            <a href="/publications/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-book-open" aria-hidden="true"></i> 论文</a>
            <a href="/cv/" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> 简历</a>
          </div>
        </div>
        <div class="home-hero-meta">
          <img src="/assets/img/oxford-crest.png" alt="University of Oxford crest" class="home-hero-crest" />
          <div>
            <div class="home-meta-label">现任职位</div>
            <strong>牛津大学博士后研究员</strong>
            <span>工程科学系，University of Oxford</span>
          </div>
          <div class="home-meta-list">
            <span>ARIA SAGEflex 项目</span>
            <span>Oxford Power Systems Architecture Lab</span>
            <span>欢迎高校、系统运营商、能源企业和 AI 基础设施团队合作</span>
          </div>
        </div>
      </section>

      <section class="home-impact-grid" aria-label="研究概览">
        <div class="home-impact-item">
          <span>2026</span>
          <strong>4 篇近期论文</strong>
          <p>包括 IEEE TIA、INFORMS Journal on Computing 和两篇新的 arXiv 预印本。</p>
        </div>
        <div class="home-impact-item">
          <span>15 分钟</span>
          <strong>快速训练</strong>
          <p>GradMAP 在案例中训练 1,000 个电网边缘智能体的去中心化策略。</p>
        </div>
        <div class="home-impact-item">
          <span>100x+</span>
          <strong>优化加速</strong>
          <p>SFLA 与 FICA 面向大规模机会约束电力系统决策。</p>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>研究方向</span>
          <h2>从理论保证走向可部署的灵活性资源。</h2>
        </div>
        <div class="home-focus-grid">
          <article>
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
            <h3>可靠灵活性聚合</h3>
            <p>研究分布鲁棒与机会约束方法，在协调大量不确定设备时保留灵活性履约保证。</p>
          </article>
          <article>
            <i class="fa-solid fa-bolt" aria-hidden="true"></i>
            <h3>AI 数据中心参与电网服务</h3>
            <p>面向 AI/HPC 负载的电力系统感知控制，包括真实 GPU 一次调频实验。</p>
          </article>
          <article>
            <i class="fa-solid fa-network-wired" aria-hidden="true"></i>
            <h3>面向 AI 的潮流计算</h3>
            <p>构建可 GPU 加速、可微分、能融入现代 AI 生态的电力系统计算工具。</p>
          </article>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>近期论文</span>
          <h2>最新成果已同步到论文页面。</h2>
        </div>
        <div class="recent-paper-grid">
          <a class="recent-paper-card" href="/publications/#zhou2026gridintelligent">
            <span>IEEE TIA · 2026</span>
            <strong>Grid-Intelligent AI Data Centres for Primary Response</strong>
            <p>真实 GPU 验证与面向一次调频的强化学习控制。</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2024strengthened">
            <span>INFORMS JOC · 2026</span>
            <strong>Strengthened and Faster Linear Approximation to Joint Chance Constraints</strong>
            <p>面向大规模决策的 Wasserstein 鲁棒联合机会约束近似。</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2026gradmap">
            <span>arXiv · 2026</span>
            <strong>GradMAP for Grid-Edge Flexibility</strong>
            <p>嵌入三相交流网络物理的去中心化多智能体学习。</p>
          </a>
          <a class="recent-paper-card" href="/publications/#zhou2026jaxpf">
            <span>arXiv · 2026</span>
            <strong>JAX-Based Batched AC Power Flow</strong>
            <p>面向 AI 集成调度的加速潮流计算。</p>
          </a>
        </div>
      </section>

      <section class="home-cv-band">
        <div>
          <span>简历</span>
          <h2>提供英文与中文 CV。</h2>
          <p>CV 页面现在可以切换两种语言版本，TeX 源文件也已纳入本仓库。</p>
        </div>
        <div class="home-action-row">
          <a href="/assets/pdf/Yihong_Zhou_CV_en.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> English PDF</a>
          <a href="/assets/pdf/Yihong_Zhou_CV_zh.pdf" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> 中文 PDF</a>
          <a href="/assets/cv/Yihong-Zhou-CV/Chinese.tex" class="btn btn-sm z-depth-0" role="button"><i class="fa-solid fa-code" aria-hidden="true"></i> TeX</a>
        </div>
      </section>

      <section class="home-section compact-bio">
        <div class="bio-summary">
          <p>
            我于 2021--2025 年在 <strong>爱丁堡大学</strong> 完成博士学位，导师为 Prof. Thomas Morstyn、Prof. Gareth Harrison 和 Dr. Wei Sun。博士论文题目为 <em>Unlocking Grid Flexibility of Distributed Energy Resources</em>。2024--2025 年期间，我曾在牛津大学担任访问博士生。
          </p>
          <p>
            我的研究关注电力系统运行中的可扩展、可靠决策方法，包括概率安全保证、分布偏移下的鲁棒优化，以及 AI 数据中心等新型资源在未来电力系统中的作用。
          </p>
        </div>
      </section>

      <section class="home-section">
        <div class="home-section-heading">
          <span>教育背景</span>
          <h2>电力系统与人工智能交叉训练。</h2>
        </div>
        <div class="education-timeline">
          <div class="education-item">
            <div class="edu-year">2025</div>
            <div class="edu-content">
              <h5>博士，爱丁堡大学</h5>
              <p>论文：<em>Unlocking Grid Flexibility of Distributed Energy Resources</em></p>
            </div>
            <div class="edu-logo"><img src="/assets/img/edinburgh-crest.png" alt="University of Edinburgh crest" class="uni-crest" /></div>
          </div>
          <div class="education-item">
            <div class="edu-year">2021</div>
            <div class="edu-content">
              <h5>人工智能硕士，爱丁堡大学，Distinction</h5>
            </div>
            <div class="edu-logo"><img src="/assets/img/edinburgh-crest.png" alt="University of Edinburgh crest" class="uni-crest" /></div>
          </div>
          <div class="education-item">
            <div class="edu-year">2020</div>
            <div class="edu-content">
              <h5>电气工程及其自动化学士，华北电力大学</h5>
            </div>
            <div class="edu-logo"><img src="/assets/img/ncepu-crest.png" alt="North China Electric Power University crest" class="uni-crest" /></div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>
