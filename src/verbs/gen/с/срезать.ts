import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срезать: PerfectVerb = {
  name: Word('срезать', 2),
  singular1stPerson: Word('срежу', 2),
  singular2ndPerson: Word('срежешь', 2),
  singular3rdPerson: Word('срежет', 2),
  plural1stPerson: Word('срежем', 2),
  plural2ndPerson: Word('срежете', 2),
  plural3rdPerson: Word('срежут', 2),
  masculinePast: Word('срезал', 2),
  femininePast: Word('срезала', 2),
  neuterPast: Word('срезало', 2),
  pluralPast: Word('срезали', 2),
  imperativeInformal: Word('срежь', 2),
  imperativeFormal: Word('срежьте', 2),
  imperfect: [],
};

perfectVerbs.set(срезать.name.text, срезать);

export { срезать };