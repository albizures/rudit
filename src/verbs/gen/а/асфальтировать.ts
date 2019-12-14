import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const асфальтировать: PerfectVerb = {
  name: Word('асфальтировать', 7),
  singular1stPerson: Word('асфальтирую', 7),
  singular2ndPerson: Word('асфальтируешь', 7),
  singular3rdPerson: Word('асфальтирует', 7),
  plural1stPerson: Word('асфальтируем', 7),
  plural2ndPerson: Word('асфальтируете', 7),
  plural3rdPerson: Word('асфальтируют', 7),
  masculinePast: Word('асфальтировал', 7),
  femininePast: Word('асфальтировала', 7),
  neuterPast: Word('асфальтировало', 7),
  pluralPast: Word('асфальтировали', 7),
  imperativeInformal: Word('асфальтируй', 7),
  imperativeFormal: Word('асфальтируйте', 7),
  imperfect: ['заасфальтировать'],
};

perfectVerbs.set(асфальтировать.name.text, асфальтировать);

export { асфальтировать };