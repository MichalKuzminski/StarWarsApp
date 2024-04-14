'use client';
import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { IAppPage } from '@/app/types/types';
import Link from 'next/link';

export default function CardTile(props: IAppPage) {
  return (
    <Link href={props.link}>
      <Card key={props.key} isPressable className="py-4 max-w-max border-red">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-wrap">
          <h4 className="font-bold text-large">{props.title}</h4>
          <small className="text-default-500">{props.description}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2" style={{ height: '300px' }}>
          <div className="image-container">
            <Image
              width={300}
              height={300}
              alt="Card background"
              className="object-cover"
              src={props.imgLink.src}
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
