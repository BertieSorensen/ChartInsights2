# ChartInsights2

Shipping insight display platform

## JavaScript version

Open `index.html` in a web browser. The page loads `data.csv` and displays a
line chart using Chart.js. Select a data series from the dropdown and use your
mouse wheel or drag to zoom and pan along the time axis.

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
