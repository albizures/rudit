import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упаковать: PerfectVerb = {
  name: Word('упаковать', 6),
  singular1stPerson: Word('упакую', 4),
  singular2ndPerson: Word('упакуешь', 4),
  singular3rdPerson: Word('упакует', 4),
  plural1stPerson: Word('упакуем', 4),
  plural2ndPerson: Word('упакуете', 4),
  plural3rdPerson: Word('упакуют', 4),
  masculinePast: Word('упаковал', 6),
  femininePast: Word('упаковала', 6),
  neuterPast: Word('упаковало', 6),
  pluralPast: Word('упаковали', 6),
  imperativeInformal: Word('упакуй', 4),
  imperativeFormal: Word('упакуйте', 4),
  imperfect: [],
};

perfectVerbs.set(упаковать.name.text, упаковать);

export { упаковать };