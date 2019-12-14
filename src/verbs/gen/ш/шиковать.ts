import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шиковать: PerfectVerb = {
  name: Word('шиковать', 5),
  singular1stPerson: Word('шикую', 3),
  singular2ndPerson: Word('шикуешь', 3),
  singular3rdPerson: Word('шикует', 3),
  plural1stPerson: Word('шикуем', 3),
  plural2ndPerson: Word('шикуете', 3),
  plural3rdPerson: Word('шикуют', 3),
  masculinePast: Word('шиковал', 5),
  femininePast: Word('шиковала', 5),
  neuterPast: Word('шиковало', 5),
  pluralPast: Word('шиковали', 5),
  imperativeInformal: Word('шикуй', 3),
  imperativeFormal: Word('шикуйте', 3),
  imperfect: [],
};

perfectVerbs.set(шиковать.name.text, шиковать);

export { шиковать };