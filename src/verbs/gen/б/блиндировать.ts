import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блиндировать: PerfectVerb = {
  name: Word('блиндировать', 9),
  singular1stPerson: Word('блиндирую', 7),
  singular2ndPerson: Word('блиндируешь', 7),
  singular3rdPerson: Word('блиндирует', 7),
  plural1stPerson: Word('блиндируем', 7),
  plural2ndPerson: Word('блиндируете', 7),
  plural3rdPerson: Word('блиндируют', 7),
  masculinePast: Word('блиндировал', 9),
  femininePast: Word('блиндировала', 9),
  neuterPast: Word('блиндировало', 9),
  pluralPast: Word('блиндировали', 9),
  imperativeInformal: Word('блиндируй', 7),
  imperativeFormal: Word('блиндируйте', 7),
  imperfect: [],
};

perfectVerbs.set(блиндировать.name.text, блиндировать);

export { блиндировать };