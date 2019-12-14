import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпасть: PerfectVerb = {
  name: Word('подпасть', 4),
  singular1stPerson: Word('подпаду', 6),
  singular2ndPerson: Word('подпадёшь', 4),
  singular3rdPerson: Word('подпадёт', 4),
  plural1stPerson: Word('подпадём', 4),
  plural2ndPerson: Word('подпадёте', 4),
  plural3rdPerson: Word('подпадут', 6),
  masculinePast: Word('подпал', 4),
  femininePast: Word('подпала', 4),
  neuterPast: Word('подпало', 4),
  pluralPast: Word('подпали', 4),
  imperativeInformal: Word('подпади', 6),
  imperativeFormal: Word('подпадите', 6),
  imperfect: [],
};

perfectVerbs.set(подпасть.name.text, подпасть);

export { подпасть };