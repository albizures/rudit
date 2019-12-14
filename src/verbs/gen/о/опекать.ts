import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опекать: PerfectVerb = {
  name: Word('опекать', 4),
  singular1stPerson: Word('опекаю', 4),
  singular2ndPerson: Word('опекаешь', 4),
  singular3rdPerson: Word('опекает', 4),
  plural1stPerson: Word('опекаем', 4),
  plural2ndPerson: Word('опекаете', 4),
  plural3rdPerson: Word('опекают', 4),
  masculinePast: Word('опекал', 4),
  femininePast: Word('опекала', 4),
  neuterPast: Word('опекало', 4),
  pluralPast: Word('опекали', 4),
  imperativeInformal: Word('опекай', 4),
  imperativeFormal: Word('опекайте', 4),
  imperfect: [],
};

perfectVerbs.set(опекать.name.text, опекать);

export { опекать };