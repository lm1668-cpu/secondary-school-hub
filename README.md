# 升中同學會｜直資申請與比較工作台

手機優先的靜態資訊網站，聚焦 2027 中一入學的直資申請安排。首頁說明參加／不參加中學學位分配辦法（SSPA）的直資學校之年度差別，並提供免登入、可列印的三校比較工作紙。

## 網站與檔案

- GitHub Pages 網站：<https://lm1668-cpu.github.io/secondary-school-hub/>
- `index.html`：首頁及資訊導覽
- `faq.html`：直資中一申請 FAQ；內容標示 2027/28 入學及 2025/2027 年度 SSPA 週期，逐題連結教育局／校方官方來源
- `worksheet.html`：三校比較工作紙；表單內容不會送往伺服器或寫入瀏覽器儲存空間
- `style.css`：響應式及列印樣式
- `app.js`：列印／清除工作紙功能，沒有分析追蹤程式
- `mascots.png`、`favicon.svg`：網站所需視覺素材

## 本機預覽

在此資料夾執行：

```sh
python3 -m http.server 8000
```

然後瀏覽 `http://localhost:8000/`。

## 資料原則

首頁日期按教育局「2025/2027年度中學學位分配辦法」資料核對，核對日為 17/11/2026。直資學校是否參加 SSPA，與個別學校本年度是否招收中一分開處理；沒有校方正式來源的逐校日期、學費或招生狀態，不填作事實。請家長以教育局及校方最新公布為準。

- [教育局：中學學位分配辦法](https://www.edb.gov.hk/tc/edu-system/primary-secondary/spa-systems/secondary-spa/general-info/index.html)
- [教育局：直資計劃學校資料](https://www.edb.gov.hk/tc/edu-system/primary-secondary/applicable-to-primary-secondary/direct-subsidy-scheme/info-sch.html)
- [家校會：《中學概覽》](https://www.chsc.hk/secondary/)

本網站是獨立資訊整理，並非教育局或學校官方平台，不提供取錄率預測或學校排名。
