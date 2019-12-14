import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стандартизировать: PerfectVerb = {
  name: Word('стандартизировать', 10),
  singular1stPerson: Word('стандартизирую', 10),
  singular2ndPerson: Word('стандартизируешь', 10),
  singular3rdPerson: Word('стандартизирует', 10),
  plural1stPerson: Word('стандартизируем', 10),
  plural2ndPerson: Word('стандартизируете', 10),
  plural3rdPerson: Word('стандартизируют', 10),
  masculinePast: Word('стандартизировал', 10),
  femininePast: Word('стандартизировала', 10),
  neuterPast: Word('стандартизировало', 10),
  pluralPast: Word('стандартизировали', 10),
  imperativeInformal: Word('стандартизируй', 10),
  imperativeFormal: Word('стандартизируйте', 10),
  imperfect: [],
};

perfectVerbs.set(стандартизировать.name.text, стандартизировать);

export { стандартизировать };