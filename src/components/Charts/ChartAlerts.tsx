import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, Bar, XAxis, YAxis, Label, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Title from 'components/Title';
import Colors from 'styles/colors';

const data = [
    { name: 'Fogo', alertas: 4000 },
    { name: 'Desmatamento', alertas: 3000 },
    { name: 'Pesca', alertas: 2000 },
    { name: 'Exploração madeira', alertas: 2780 },
    { name: 'Garimpo', alertas: 1890 },
    { name: 'Invasão em TI', alertas: 2390 },
    { name: 'Caça', alertas: 3490 },
];

const ChartAlerts = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Alertas</Title>
            <ResponsiveContainer>
                <BarChart data={data}
                    margin={{ top: 15, right: 16, left: 24, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} tick={{fontSize: 11}}/>
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: 'rgb(102, 102, 102)' }}
                        >
                            Quantidade
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="alertas" fill={Colors.danger} />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default ChartAlerts;