import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опережать: PerfectVerb = {
  name: Word('опережать', 6),
  singular1stPerson: Word('опережаю', 6),
  singular2ndPerson: Word('опережаешь', 6),
  singular3rdPerson: Word('опережает', 6),
  plural1stPerson: Word('опережаем', 6),
  plural2ndPerson: Word('опережаете', 6),
  plural3rdPerson: Word('опережают', 6),
  masculinePast: Word('опережал', 6),
  femininePast: Word('опережала', 6),
  neuterPast: Word('опережало', 6),
  pluralPast: Word('опережали', 6),
  imperativeInformal: Word('опережай', 6),
  imperativeFormal: Word('опережайте', 6),
  imperfect: ['опередить'],
};

perfectVerbs.set(опережать.name.text, опережать);

export { опережать };