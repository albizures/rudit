import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокомментировать: PerfectVerb = {
  name: Word('прокомментировать', 10),
  singular1stPerson: Word('прокомментирую', 10),
  singular2ndPerson: Word('прокомментируешь', 10),
  singular3rdPerson: Word('прокомментирует', 10),
  plural1stPerson: Word('прокомментируем', 10),
  plural2ndPerson: Word('прокомментируете', 10),
  plural3rdPerson: Word('прокомментируют', 10),
  masculinePast: Word('прокомментировал', 10),
  femininePast: Word('прокомментировала', 10),
  neuterPast: Word('прокомментировало', 10),
  pluralPast: Word('прокомментировали', 10),
  imperativeInformal: Word('прокомментируй', 10),
  imperativeFormal: Word('прокомментируйте', 10),
  imperfect: [],
};

perfectVerbs.set(прокомментировать.name.text, прокомментировать);

export { прокомментировать };