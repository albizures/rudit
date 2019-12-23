import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @Column('integer')
  stress: number;
}

export { Word };
