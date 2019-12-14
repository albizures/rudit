import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абсолютизировать: PerfectVerb = {
  name: Word('абсолютизировать', 9),
  singular1stPerson: Word('абсолютизирую', 9),
  singular2ndPerson: Word('абсолютизируешь', 9),
  singular3rdPerson: Word('абсолютизирует', 9),
  plural1stPerson: Word('абсолютизируем', 9),
  plural2ndPerson: Word('абсолютизируете', 9),
  plural3rdPerson: Word('абсолютизируют', 9),
  masculinePast: Word('абсолютизировал', 9),
  femininePast: Word('абсолютизировала', 9),
  neuterPast: Word('абсолютизировало', 9),
  pluralPast: Word('абсолютизировали', 9),
  imperativeInformal: Word('абсолютизируй', 9),
  imperativeFormal: Word('абсолютизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(абсолютизировать.name.text, абсолютизировать);

export { абсолютизировать };