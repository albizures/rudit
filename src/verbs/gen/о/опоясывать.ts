import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоясывать: PerfectVerb = {
  name: Word('опоясывать', 3),
  singular1stPerson: Word('опоясываю', 3),
  singular2ndPerson: Word('опоясываешь', 3),
  singular3rdPerson: Word('опоясывает', 3),
  plural1stPerson: Word('опоясываем', 3),
  plural2ndPerson: Word('опоясываете', 3),
  plural3rdPerson: Word('опоясывают', 3),
  masculinePast: Word('опоясывал', 3),
  femininePast: Word('опоясывала', 3),
  neuterPast: Word('опоясывало', 3),
  pluralPast: Word('опоясывали', 3),
  imperativeInformal: Word('опоясывай', 3),
  imperativeFormal: Word('опоясывайте', 3),
  imperfect: ['опоясать'],
};

perfectVerbs.set(опоясывать.name.text, опоясывать);

export { опоясывать };