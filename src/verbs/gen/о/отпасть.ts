import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпасть: PerfectVerb = {
  name: Word('отпасть', 3),
  singular1stPerson: Word('отпаду', 5),
  singular2ndPerson: Word('отпадёшь', 5),
  singular3rdPerson: Word('отпадёт', 5),
  plural1stPerson: Word('отпадём', 5),
  plural2ndPerson: Word('отпадёте', 5),
  plural3rdPerson: Word('отпадут', 5),
  masculinePast: Word('отпал', 3),
  femininePast: Word('отпала', 3),
  neuterPast: Word('отпало', 3),
  pluralPast: Word('отпали', 3),
  imperativeInformal: Word('отпади', 5),
  imperativeFormal: Word('отпадите', 5),
  imperfect: [],
};

perfectVerbs.set(отпасть.name.text, отпасть);

export { отпасть };