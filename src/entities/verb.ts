import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Word } from './word';

@Entity()
class PerfectVerb {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Word)
  @JoinColumn()
  name: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular1stPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular2ndPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular3rdPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural1stPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural2ndPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural3rdPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  masculinePast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  femininePast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  neuterPast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  pluralPast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  imperativeInformal: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  imperativeFormal: Word;

  @ManyToMany((type) => ImperfectVerb)
  @JoinTable()
  imperfects: ImperfectVerb[];
}

@Entity()
class ImperfectVerb {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Word)
  @JoinColumn()
  name: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular1stPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular2ndPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  singular3rdPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural1stPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural2ndPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  plural3rdPerson: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  masculinePast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  femininePast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  neuterPast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  pluralPast: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  imperativeInformal: Word;

  @OneToOne((type) => Word)
  @JoinColumn()
  imperativeFormal: Word;

  @ManyToMany((type) => PerfectVerb)
  @JoinTable()
  perfects: PerfectVerb[];
}

export { PerfectVerb, ImperfectVerb };
