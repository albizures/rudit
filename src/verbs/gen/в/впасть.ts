import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впасть: PerfectVerb = {
  name: Word('впасть', 2),
  singular1stPerson: Word('впаду', 4),
  singular2ndPerson: Word('впадёшь', 2),
  singular3rdPerson: Word('впадёт', 2),
  plural1stPerson: Word('впадём', 2),
  plural2ndPerson: Word('впадёте', 2),
  plural3rdPerson: Word('впадут', 4),
  masculinePast: Word('впал', 2),
  femininePast: Word('впала', 2),
  neuterPast: Word('впало', 2),
  pluralPast: Word('впали', 2),
  imperativeInformal: Word('впади', 4),
  imperativeFormal: Word('впадите', 4),
  imperfect: [],
};

perfectVerbs.set(впасть.name.text, впасть);

export { впасть };