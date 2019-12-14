import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбраковать: PerfectVerb = {
  name: Word('выбраковать', 1),
  singular1stPerson: Word('выбракую', 1),
  singular2ndPerson: Word('выбракуешь', 1),
  singular3rdPerson: Word('выбракует', 1),
  plural1stPerson: Word('выбракуем', 1),
  plural2ndPerson: Word('выбракуете', 1),
  plural3rdPerson: Word('выбракуют', 1),
  masculinePast: Word('выбраковал', 1),
  femininePast: Word('выбраковала', 1),
  neuterPast: Word('выбраковало', 1),
  pluralPast: Word('выбраковали', 1),
  imperativeInformal: Word('выбракуй', 1),
  imperativeFormal: Word('выбракуйте', 1),
  imperfect: [],
};

perfectVerbs.set(выбраковать.name.text, выбраковать);

export { выбраковать };