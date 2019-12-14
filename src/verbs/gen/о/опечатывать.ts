import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опечатывать: PerfectVerb = {
  name: Word('опечатывать', 4),
  singular1stPerson: Word('опечатываю', 4),
  singular2ndPerson: Word('опечатываешь', 4),
  singular3rdPerson: Word('опечатывает', 4),
  plural1stPerson: Word('опечатываем', 4),
  plural2ndPerson: Word('опечатываете', 4),
  plural3rdPerson: Word('опечатывают', 4),
  masculinePast: Word('опечатывал', 4),
  femininePast: Word('опечатывала', 4),
  neuterPast: Word('опечатывало', 4),
  pluralPast: Word('опечатывали', 4),
  imperativeInformal: Word('опечатывай', 4),
  imperativeFormal: Word('опечатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(опечатывать.name.text, опечатывать);

export { опечатывать };