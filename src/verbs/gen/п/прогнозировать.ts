import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнозировать: PerfectVerb = {
  name: Word('прогнозировать', 7),
  singular1stPerson: Word('прогнозирую', 7),
  singular2ndPerson: Word('прогнозируешь', 7),
  singular3rdPerson: Word('прогнозирует', 7),
  plural1stPerson: Word('прогнозируем', 7),
  plural2ndPerson: Word('прогнозируете', 7),
  plural3rdPerson: Word('прогнозируют', 7),
  masculinePast: Word('прогнозировал', 7),
  femininePast: Word('прогнозировала', 7),
  neuterPast: Word('прогнозировало', 7),
  pluralPast: Word('прогнозировали', 7),
  imperativeInformal: Word('прогнозируй', 7),
  imperativeFormal: Word('прогнозируйте', 7),
  imperfect: [],
};

perfectVerbs.set(прогнозировать.name.text, прогнозировать);

export { прогнозировать };