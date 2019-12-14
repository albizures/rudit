import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конвоировать: PerfectVerb = {
  name: Word('конвоировать', 5),
  singular1stPerson: Word('конвоирую', 5),
  singular2ndPerson: Word('конвоируешь', 5),
  singular3rdPerson: Word('конвоирует', 5),
  plural1stPerson: Word('конвоируем', 5),
  plural2ndPerson: Word('конвоируете', 5),
  plural3rdPerson: Word('конвоируют', 5),
  masculinePast: Word('конвоировал', 5),
  femininePast: Word('конвоировала', 5),
  neuterPast: Word('конвоировало', 5),
  pluralPast: Word('конвоировали', 5),
  imperativeInformal: Word('конвоируй', 5),
  imperativeFormal: Word('конвоируйте', 5),
  imperfect: [],
};

perfectVerbs.set(конвоировать.name.text, конвоировать);

export { конвоировать };