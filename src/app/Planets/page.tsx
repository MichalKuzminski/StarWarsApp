'use client';
import { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { IColumns, IPlanet } from '../types/types';

const columns: IColumns[] = [
  {
    key: 'name',
    label: 'NAZWA',
  },
  {
    key: 'rotation_period',
    label: 'OKRES OBROTU',
  },
  {
    key: 'diameter',
    label: 'ŚREDNICA',
  },
  {
    key: 'population',
    label: 'POPULACJA',
  },
];

export default function Planets() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [planets, setPlanets] = useState<IPlanet[]>([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((res) => res.json())
      .then((data: any) => {
        setData(data.results ? [data.results] : null);
        if (data.results.length) {
          setPlanets(data.results);
        }
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Ładowanie...</p>;
  if (!planets) return <p>Nie udało się wczytać planet</p>;

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-amber-400 md:text-5xl lg:text-6xl dark:text-white">
        Planety
      </h1>
      <Table isStriped>
        <TableHeader columns={columns}>
          {(column: IColumns) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {planets.map((planet) => (
            <TableRow key={planet.name}>
              {(columnKey: string) => (
                <TableCell className="text-black">
                  {getKeyValue(planet, columnKey) !== 'unknown'
                    ? getKeyValue(planet, columnKey)
                    : 'Brak danych'}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
