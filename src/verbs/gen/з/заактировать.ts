import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заактировать: PerfectVerb = {
  name: Word('заактировать', 5),
  singular1stPerson: Word('заактирую', 5),
  singular2ndPerson: Word('заактируешь', 5),
  singular3rdPerson: Word('заактирует', 5),
  plural1stPerson: Word('заактируем', 5),
  plural2ndPerson: Word('заактируете', 5),
  plural3rdPerson: Word('заактируют', 5),
  masculinePast: Word('заактировал', 5),
  femininePast: Word('заактировала', 5),
  neuterPast: Word('заактировало', 5),
  pluralPast: Word('заактировали', 5),
  imperativeInformal: Word('заактируй', 5),
  imperativeFormal: Word('заактируйте', 5),
  imperfect: [],
};

perfectVerbs.set(заактировать.name.text, заактировать);

export { заактировать };