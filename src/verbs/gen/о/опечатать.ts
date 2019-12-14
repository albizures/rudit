import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опечатать: PerfectVerb = {
  name: Word('опечатать', 4),
  singular1stPerson: Word('опечатаю', 4),
  singular2ndPerson: Word('опечатаешь', 4),
  singular3rdPerson: Word('опечатает', 4),
  plural1stPerson: Word('опечатаем', 4),
  plural2ndPerson: Word('опечатаете', 4),
  plural3rdPerson: Word('опечатают', 4),
  masculinePast: Word('опечатал', 4),
  femininePast: Word('опечатала', 4),
  neuterPast: Word('опечатало', 4),
  pluralPast: Word('опечатали', 4),
  imperativeInformal: Word('опечатай', 4),
  imperativeFormal: Word('опечатайте', 4),
  imperfect: [],
};

perfectVerbs.set(опечатать.name.text, опечатать);

export { опечатать };