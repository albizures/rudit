import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попировать: PerfectVerb = {
  name: Word('попировать', 7),
  singular1stPerson: Word('попирую', 5),
  singular2ndPerson: Word('попируешь', 5),
  singular3rdPerson: Word('попирует', 5),
  plural1stPerson: Word('попируем', 5),
  plural2ndPerson: Word('попируете', 5),
  plural3rdPerson: Word('попируют', 5),
  masculinePast: Word('попировал', 7),
  femininePast: Word('попировала', 7),
  neuterPast: Word('попировало', 7),
  pluralPast: Word('попировали', 7),
  imperativeInformal: Word('попируй', 5),
  imperativeFormal: Word('попируйте', 5),
  imperfect: [],
};

perfectVerbs.set(попировать.name.text, попировать);

export { попировать };