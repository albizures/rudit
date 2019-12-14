import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жировать: PerfectVerb = {
  name: Word('жировать', 5),
  singular1stPerson: Word('жирую', 3),
  singular2ndPerson: Word('жируешь', 3),
  singular3rdPerson: Word('жирует', 3),
  plural1stPerson: Word('жируем', 3),
  plural2ndPerson: Word('жируете', 3),
  plural3rdPerson: Word('жируют', 3),
  masculinePast: Word('жировал', 5),
  femininePast: Word('жировала', 5),
  neuterPast: Word('жировало', 5),
  pluralPast: Word('жировали', 5),
  imperativeInformal: Word('жируй', 3),
  imperativeFormal: Word('жируйте', 3),
  imperfect: [],
};

perfectVerbs.set(жировать.name.text, жировать);

export { жировать };