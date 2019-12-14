import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эксплуатировать: PerfectVerb = {
  name: Word('эксплуатировать', 8),
  singular1stPerson: Word('эксплуатирую', 8),
  singular2ndPerson: Word('эксплуатируешь', 8),
  singular3rdPerson: Word('эксплуатирует', 8),
  plural1stPerson: Word('эксплуатируем', 8),
  plural2ndPerson: Word('эксплуатируете', 8),
  plural3rdPerson: Word('эксплуатируют', 8),
  masculinePast: Word('эксплуатировал', 8),
  femininePast: Word('эксплуатировала', 8),
  neuterPast: Word('эксплуатировало', 8),
  pluralPast: Word('эксплуатировали', 8),
  imperativeInformal: Word('эксплуатируй', 8),
  imperativeFormal: Word('эксплуатируйте', 8),
  imperfect: [],
};

perfectVerbs.set(эксплуатировать.name.text, эксплуатировать);

export { эксплуатировать };