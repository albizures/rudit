import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позировать: PerfectVerb = {
  name: Word('позировать', 3),
  singular1stPerson: Word('позирую', 3),
  singular2ndPerson: Word('позируешь', 3),
  singular3rdPerson: Word('позирует', 3),
  plural1stPerson: Word('позируем', 3),
  plural2ndPerson: Word('позируете', 3),
  plural3rdPerson: Word('позируют', 3),
  masculinePast: Word('позировал', 3),
  femininePast: Word('позировала', 3),
  neuterPast: Word('позировало', 3),
  pluralPast: Word('позировали', 3),
  imperativeInformal: Word('позируй', 3),
  imperativeFormal: Word('позируйте', 3),
  imperfect: [],
};

perfectVerbs.set(позировать.name.text, позировать);

export { позировать };