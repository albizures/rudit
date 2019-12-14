import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const делегировать: PerfectVerb = {
  name: Word('делегировать', 5),
  singular1stPerson: Word('делегирую', 5),
  singular2ndPerson: Word('делегируешь', 5),
  singular3rdPerson: Word('делегирует', 5),
  plural1stPerson: Word('делегируем', 5),
  plural2ndPerson: Word('делегируете', 5),
  plural3rdPerson: Word('делегируют', 5),
  masculinePast: Word('делегировал', 5),
  femininePast: Word('делегировала', 5),
  neuterPast: Word('делегировало', 5),
  pluralPast: Word('делегировали', 5),
  imperativeInformal: Word('делегируй', 5),
  imperativeFormal: Word('делегируйте', 5),
  imperfect: [],
};

perfectVerbs.set(делегировать.name.text, делегировать);

export { делегировать };