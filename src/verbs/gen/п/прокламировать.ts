import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокламировать: PerfectVerb = {
  name: Word('прокламировать', 7),
  singular1stPerson: Word('прокламирую', 7),
  singular2ndPerson: Word('прокламируешь', 7),
  singular3rdPerson: Word('прокламирует', 7),
  plural1stPerson: Word('прокламируем', 7),
  plural2ndPerson: Word('прокламируете', 7),
  plural3rdPerson: Word('прокламируют', 7),
  masculinePast: Word('прокламировал', 7),
  femininePast: Word('прокламировала', 7),
  neuterPast: Word('прокламировало', 7),
  pluralPast: Word('прокламировали', 7),
  imperativeInformal: Word('прокламируй', 7),
  imperativeFormal: Word('прокламируйте', 7),
  imperfect: [],
};

perfectVerbs.set(прокламировать.name.text, прокламировать);

export { прокламировать };