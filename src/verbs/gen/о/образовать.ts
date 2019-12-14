import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const образовать: PerfectVerb = {
  name: Word('образовать', 7),
  singular1stPerson: Word('образую', 5),
  singular2ndPerson: Word('образуешь', 5),
  singular3rdPerson: Word('образует', 5),
  plural1stPerson: Word('образуем', 5),
  plural2ndPerson: Word('образуете', 5),
  plural3rdPerson: Word('образуют', 5),
  masculinePast: Word('образовал', 7),
  femininePast: Word('образовала', 7),
  neuterPast: Word('образовало', 7),
  pluralPast: Word('образовали', 7),
  imperativeInformal: Word('образуй', 5),
  imperativeFormal: Word('образуйте', 5),
  imperfect: [],
};

perfectVerbs.set(образовать.name.text, образовать);

export { образовать };