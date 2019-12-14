import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объективировать: PerfectVerb = {
  name: Word('объективировать', 8),
  singular1stPerson: Word('объективирую', 8),
  singular2ndPerson: Word('объективируешь', 8),
  singular3rdPerson: Word('объективирует', 8),
  plural1stPerson: Word('объективируем', 8),
  plural2ndPerson: Word('объективируете', 8),
  plural3rdPerson: Word('объективируют', 8),
  masculinePast: Word('объективировал', 8),
  femininePast: Word('объективировала', 8),
  neuterPast: Word('объективировало', 8),
  pluralPast: Word('объективировали', 8),
  imperativeInformal: Word('объективируй', 8),
  imperativeFormal: Word('объективируйте', 8),
  imperfect: [],
};

perfectVerbs.set(объективировать.name.text, объективировать);

export { объективировать };