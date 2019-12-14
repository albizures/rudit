import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const саботировать: PerfectVerb = {
  name: Word('саботировать', 5),
  singular1stPerson: Word('саботирую', 5),
  singular2ndPerson: Word('саботируешь', 5),
  singular3rdPerson: Word('саботирует', 5),
  plural1stPerson: Word('саботируем', 5),
  plural2ndPerson: Word('саботируете', 5),
  plural3rdPerson: Word('саботируют', 5),
  masculinePast: Word('саботировал', 5),
  femininePast: Word('саботировала', 5),
  neuterPast: Word('саботировало', 5),
  pluralPast: Word('саботировали', 5),
  imperativeInformal: Word('саботируй', 5),
  imperativeFormal: Word('саботируйте', 5),
  imperfect: [],
};

perfectVerbs.set(саботировать.name.text, саботировать);

export { саботировать };