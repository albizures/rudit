import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кооптировать: PerfectVerb = {
  name: Word('кооптировать', 5),
  singular1stPerson: Word('кооптирую', 5),
  singular2ndPerson: Word('кооптируешь', 5),
  singular3rdPerson: Word('кооптирует', 5),
  plural1stPerson: Word('кооптируем', 5),
  plural2ndPerson: Word('кооптируете', 5),
  plural3rdPerson: Word('кооптируют', 5),
  masculinePast: Word('кооптировал', 5),
  femininePast: Word('кооптировала', 5),
  neuterPast: Word('кооптировало', 5),
  pluralPast: Word('кооптировали', 5),
  imperativeInformal: Word('кооптируй', 5),
  imperativeFormal: Word('кооптируйте', 5),
  imperfect: [],
};

perfectVerbs.set(кооптировать.name.text, кооптировать);

export { кооптировать };