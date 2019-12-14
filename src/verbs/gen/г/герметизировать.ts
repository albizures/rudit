import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const герметизировать: PerfectVerb = {
  name: Word('герметизировать', 8),
  singular1stPerson: Word('герметизирую', 8),
  singular2ndPerson: Word('герметизируешь', 8),
  singular3rdPerson: Word('герметизирует', 8),
  plural1stPerson: Word('герметизируем', 8),
  plural2ndPerson: Word('герметизируете', 8),
  plural3rdPerson: Word('герметизируют', 8),
  masculinePast: Word('герметизировал', 8),
  femininePast: Word('герметизировала', 8),
  neuterPast: Word('герметизировало', 8),
  pluralPast: Word('герметизировали', 8),
  imperativeInformal: Word('герметизируй', 8),
  imperativeFormal: Word('герметизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(герметизировать.name.text, герметизировать);

export { герметизировать };