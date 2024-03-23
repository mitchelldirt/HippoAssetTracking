import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/* turn this typescript type into a database table */
/* id: string;
    name: string;
    description: string;
    price: number;
    serial: string;
    model: string;
    sku: string;
    image: string;
    category: "Software" | "Hardware" | "Other";
    status: "Available" | "Unavailable" | "Damaged" | "Lost" | "Stolen" | "In Repair" | "In Use";
    location: string;
    assigneeHistory: Assignment[]; */
@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  serial: string;

  @Column()
  model: string;

  @Column()
  sku: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column()
  location: string;

  @Column()
  assigneeHistory: string;
}
