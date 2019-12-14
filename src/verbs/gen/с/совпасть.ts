import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совпасть: PerfectVerb = {
  name: Word('совпасть', 4),
  singular1stPerson: Word('совпаду', 6),
  singular2ndPerson: Word('совпадёшь', 4),
  singular3rdPerson: Word('совпадёт', 4),
  plural1stPerson: Word('совпадём', 4),
  plural2ndPerson: Word('совпадёте', 4),
  plural3rdPerson: Word('совпадут', 6),
  masculinePast: Word('совпал', 4),
  femininePast: Word('совпала', 4),
  neuterPast: Word('совпало', 4),
  pluralPast: Word('совпали', 4),
  imperativeInformal: Word('совпади', 6),
  imperativeFormal: Word('совпадите', 6),
  imperfect: ['совпадать'],
};

perfectVerbs.set(совпасть.name.text, совпасть);

export { совпасть };