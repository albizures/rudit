import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иронизировать: PerfectVerb = {
  name: Word('иронизировать', 6),
  singular1stPerson: Word('иронизирую', 6),
  singular2ndPerson: Word('иронизируешь', 6),
  singular3rdPerson: Word('иронизирует', 6),
  plural1stPerson: Word('иронизируем', 6),
  plural2ndPerson: Word('иронизируете', 6),
  plural3rdPerson: Word('иронизируют', 6),
  masculinePast: Word('иронизировал', 6),
  femininePast: Word('иронизировала', 6),
  neuterPast: Word('иронизировало', 6),
  pluralPast: Word('иронизировали', 6),
  imperativeInformal: Word('иронизируй', 6),
  imperativeFormal: Word('иронизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(иронизировать.name.text, иронизировать);

export { иронизировать };