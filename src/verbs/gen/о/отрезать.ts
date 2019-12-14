import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрезать: PerfectVerb = {
  name: Word('отрезать', 3),
  singular1stPerson: Word('отрежу', 3),
  singular2ndPerson: Word('отрежешь', 3),
  singular3rdPerson: Word('отрежет', 3),
  plural1stPerson: Word('отрежем', 3),
  plural2ndPerson: Word('отрежете', 3),
  plural3rdPerson: Word('отрежут', 3),
  masculinePast: Word('отрезал', 3),
  femininePast: Word('отрезала', 3),
  neuterPast: Word('отрезало', 3),
  pluralPast: Word('отрезали', 3),
  imperativeInformal: Word('отрежь', 3),
  imperativeFormal: Word('отрежьте', 3),
  imperfect: ['отрезать'],
};

perfectVerbs.set(отрезать.name.text, отрезать);

export { отрезать };