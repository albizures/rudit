import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лорнировать: PerfectVerb = {
  name: Word('лорнировать', 4),
  singular1stPerson: Word('лорнирую', 4),
  singular2ndPerson: Word('лорнируешь', 4),
  singular3rdPerson: Word('лорнирует', 4),
  plural1stPerson: Word('лорнируем', 4),
  plural2ndPerson: Word('лорнируете', 4),
  plural3rdPerson: Word('лорнируют', 4),
  masculinePast: Word('лорнировал', 4),
  femininePast: Word('лорнировала', 4),
  neuterPast: Word('лорнировало', 4),
  pluralPast: Word('лорнировали', 4),
  imperativeInformal: Word('лорнируй', 4),
  imperativeFormal: Word('лорнируйте', 4),
  imperfect: [],
};

perfectVerbs.set(лорнировать.name.text, лорнировать);

export { лорнировать };