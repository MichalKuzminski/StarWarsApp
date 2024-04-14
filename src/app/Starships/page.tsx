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
import { IColumns, IStarship } from '../types/types';

const columns: IColumns[] = [
  {
    key: 'name',
    label: 'NAZWA',
  },
  {
    key: 'model',
    label: 'MODEL',
  },
  {
    key: 'manufacturer',
    label: 'PRODUCENT',
  },
  {
    key: 'cost_in_credits',
    label: 'KOSZT',
  },
  {
    key: 'length',
    label: 'DŁUGOŚĆ STATKU',
  },
  {
    key: 'passengers',
    label: 'LICZBA PASAŻERÓW',
  },
];

export default function Starships() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [starships, setStarships] = useState<IStarship[]>([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
      .then((res) => res.json())
      .then((data: any) => {
        setData(data.results ? [data.results] : null);
        if (data.results.length) {
          setStarships(data.results);
        }
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Ładowanie...</p>;
  if (!starships) return <p>Nie udało się wczytać statków kosmicznych</p>;

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-amber-400 md:text-5xl lg:text-6xl dark:text-white">
        Statki kosmiczne
      </h1>
      <Table isStriped>
        <TableHeader columns={columns}>
          {(column: IColumns) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {starships.map((starship) => (
            <TableRow key={starship.name}>
              {(columnKey: string) => (
                <TableCell className="text-black">
                  {getKeyValue(starship, columnKey) !== 'unknown'
                    ? getKeyValue(starship, columnKey)
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
