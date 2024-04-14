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
import { IColumns, IPeople } from '../types/types';

const columns: IColumns[] = [
  {
    key: 'name',
    label: 'IMIĘ',
  },
  {
    key: 'height',
    label: 'WYSOKOŚĆ',
  },
  {
    key: 'mass',
    label: 'MASA',
  },
  {
    key: 'birth_year',
    label: 'ROK URODZENIA',
  },
];

export default function People() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const [people, setPeople] = useState<IPeople[]>([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data: any) => {
        setData(data.results ? [data.results] : null);
        if (data.results.length) {
          setPeople(data.results);
        }
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Ładowanie...</p>;
  if (!people) return <p>Nie udało się wczytać postaci</p>;

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-amber-400 md:text-5xl lg:text-6xl dark:text-white">
        Postacie
      </h1>
      <Table isStriped>
        <TableHeader columns={columns}>
          {(column: IColumns) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.name}>
              {(columnKey: string) => (
                <TableCell className="text-black">
                  {getKeyValue(person, columnKey)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
