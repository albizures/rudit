import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоясать: PerfectVerb = {
  name: Word('опоясать', 3),
  singular1stPerson: Word('опоясаю', 3),
  singular2ndPerson: Word('опоясаешь', 3),
  singular3rdPerson: Word('опоясает', 3),
  plural1stPerson: Word('опоясаем', 3),
  plural2ndPerson: Word('опоясаете', 3),
  plural3rdPerson: Word('опоясают', 3),
  masculinePast: Word('опоясал', 3),
  femininePast: Word('опоясала', 3),
  neuterPast: Word('опоясало', 3),
  pluralPast: Word('опоясали', 3),
  imperativeInformal: Word('опоясай', 3),
  imperativeFormal: Word('опоясайте', 3),
  imperfect: ['опоясывать'],
};

perfectVerbs.set(опоясать.name.text, опоясать);

export { опоясать };