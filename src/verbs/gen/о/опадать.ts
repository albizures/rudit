import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опадать: PerfectVerb = {
  name: Word('опадать', 4),
  singular1stPerson: Word('опадаю', 4),
  singular2ndPerson: Word('опадаешь', 4),
  singular3rdPerson: Word('опадает', 4),
  plural1stPerson: Word('опадаем', 4),
  plural2ndPerson: Word('опадаете', 4),
  plural3rdPerson: Word('опадают', 4),
  masculinePast: Word('опадал', 4),
  femininePast: Word('опадала', 4),
  neuterPast: Word('опадало', 4),
  pluralPast: Word('опадали', 4),
  imperativeInformal: Word('опадай', 4),
  imperativeFormal: Word('опадайте', 4),
  imperfect: [],
};

perfectVerbs.set(опадать.name.text, опадать);

export { опадать };