import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вакцинировать: PerfectVerb = {
  name: Word('вакцинировать', 6),
  singular1stPerson: Word('вакцинирую', 6),
  singular2ndPerson: Word('вакцинируешь', 6),
  singular3rdPerson: Word('вакцинирует', 6),
  plural1stPerson: Word('вакцинируем', 6),
  plural2ndPerson: Word('вакцинируете', 6),
  plural3rdPerson: Word('вакцинируют', 6),
  masculinePast: Word('вакцинировал', 6),
  femininePast: Word('вакцинировала', 6),
  neuterPast: Word('вакцинировало', 6),
  pluralPast: Word('вакцинировали', 6),
  imperativeInformal: Word('вакцинируй', 6),
  imperativeFormal: Word('вакцинируйте', 6),
  imperfect: [],
};

perfectVerbs.set(вакцинировать.name.text, вакцинировать);

export { вакцинировать };