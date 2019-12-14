import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зализывать: PerfectVerb = {
  name: Word('зализывать', 3),
  singular1stPerson: Word('зализываю', 3),
  singular2ndPerson: Word('зализываешь', 3),
  singular3rdPerson: Word('зализывает', 3),
  plural1stPerson: Word('зализываем', 3),
  plural2ndPerson: Word('зализываете', 3),
  plural3rdPerson: Word('зализывают', 3),
  masculinePast: Word('зализывал', 3),
  femininePast: Word('зализывала', 3),
  neuterPast: Word('зализывало', 3),
  pluralPast: Word('зализывали', 3),
  imperativeInformal: Word('зализывай', 3),
  imperativeFormal: Word('зализывайте', 3),
  imperfect: [],
};

perfectVerbs.set(зализывать.name.text, зализывать);

export { зализывать };