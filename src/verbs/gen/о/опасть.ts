import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опасть: PerfectVerb = {
  name: Word('опасть', 2),
  singular1stPerson: Word('опаду', 4),
  singular2ndPerson: Word('опадёшь', 2),
  singular3rdPerson: Word('опадёт', 2),
  plural1stPerson: Word('опадём', 2),
  plural2ndPerson: Word('опадёте', 2),
  plural3rdPerson: Word('опадут', 4),
  masculinePast: Word('опал', 2),
  femininePast: Word('опала', 2),
  neuterPast: Word('опало', 2),
  pluralPast: Word('опали', 2),
  imperativeInformal: Word('опади', 4),
  imperativeFormal: Word('опадите', 4),
  imperfect: [],
};

perfectVerbs.set(опасть.name.text, опасть);

export { опасть };