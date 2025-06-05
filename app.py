import pandas as pd
from dash import Dash, dcc, html, Input, Output
import plotly.graph_objects as go

# Load data
DATA_PATH = 'data.csv'

df = pd.read_csv(DATA_PATH, parse_dates=['date'])

app = Dash(__name__)

series_options = [
    {'label': col, 'value': col}
    for col in df.columns if col != 'date'
]

app.layout = html.Div([
    html.H1('ChartInsights Viewer'),
    dcc.Dropdown(
        id='series-dropdown',
        options=series_options,
        value=series_options[0]['value'],
        clearable=False
    ),
    dcc.Graph(id='time-series-chart')
])

@app.callback(
    Output('time-series-chart', 'figure'),
    Input('series-dropdown', 'value')
)
def update_chart(selected_series):
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=df['date'],
        y=df[selected_series],
        mode='lines',
        name=selected_series
    ))
    fig.update_layout(
        title=f'{selected_series} Over Time',
        xaxis_title='Date',
        yaxis_title=selected_series,
        hovermode='x unified'
    )
    fig.update_xaxes(rangeslider_visible=True)
    return fig

if __name__ == '__main__':
    app.run(debug=True)

