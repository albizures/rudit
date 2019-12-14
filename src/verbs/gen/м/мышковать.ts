import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мышковать: PerfectVerb = {
  name: Word('мышковать', 6),
  singular1stPerson: Word('мышкую', 4),
  singular2ndPerson: Word('мышкуешь', 4),
  singular3rdPerson: Word('мышкует', 4),
  plural1stPerson: Word('мышкуем', 4),
  plural2ndPerson: Word('мышкуете', 4),
  plural3rdPerson: Word('мышкуют', 4),
  masculinePast: Word('мышковал', 6),
  femininePast: Word('мышковала', 6),
  neuterPast: Word('мышковало', 6),
  pluralPast: Word('мышковали', 6),
  imperativeInformal: Word('мышкуй', 4),
  imperativeFormal: Word('мышкуйте', 4),
  imperfect: [],
};

perfectVerbs.set(мышковать.name.text, мышковать);

export { мышковать };