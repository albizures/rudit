import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогрессировать: PerfectVerb = {
  name: Word('прогрессировать', 8),
  singular1stPerson: Word('прогрессирую', 8),
  singular2ndPerson: Word('прогрессируешь', 8),
  singular3rdPerson: Word('прогрессирует', 8),
  plural1stPerson: Word('прогрессируем', 8),
  plural2ndPerson: Word('прогрессируете', 8),
  plural3rdPerson: Word('прогрессируют', 8),
  masculinePast: Word('прогрессировал', 8),
  femininePast: Word('прогрессировала', 8),
  neuterPast: Word('прогрессировало', 8),
  pluralPast: Word('прогрессировали', 8),
  imperativeInformal: Word('прогрессируй', 8),
  imperativeFormal: Word('прогрессируйте', 8),
  imperfect: [],
};

perfectVerbs.set(прогрессировать.name.text, прогрессировать);

export { прогрессировать };