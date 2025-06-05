# ChartInsights2

Shipping insight display platform

## JavaScript version

Open `index.html` in any modern browser (including the "Open Preview" feature in VS Code for Web). The page contains the CSV data inline so it works even when opened directly from the filesystem. It renders an interactive chart using Chart.js with zoom and pan controls. Use the dropdown to choose a series.

## Python Dash version

A legacy Dash implementation is kept in `app.py`. Install requirements with:
```bash
pip install dash pandas
```
Run the server:
```bash
python app.py
```
Then browse to <http://127.0.0.1:8050>.
