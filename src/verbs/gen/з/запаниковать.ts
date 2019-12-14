import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаниковать: PerfectVerb = {
  name: Word('запаниковать', 9),
  singular1stPerson: Word('запаникую', 7),
  singular2ndPerson: Word('запаникуешь', 7),
  singular3rdPerson: Word('запаникует', 7),
  plural1stPerson: Word('запаникуем', 7),
  plural2ndPerson: Word('запаникуете', 7),
  plural3rdPerson: Word('запаникуют', 7),
  masculinePast: Word('запаниковал', 9),
  femininePast: Word('запаниковала', 9),
  neuterPast: Word('запаниковало', 9),
  pluralPast: Word('запаниковали', 9),
  imperativeInformal: Word('запаникуй', 7),
  imperativeFormal: Word('запаникуйте', 7),
  imperfect: [],
};

perfectVerbs.set(запаниковать.name.text, запаниковать);

export { запаниковать };