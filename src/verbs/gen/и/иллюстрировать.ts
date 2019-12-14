import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иллюстрировать: PerfectVerb = {
  name: Word('иллюстрировать', 7),
  singular1stPerson: Word('иллюстрирую', 7),
  singular2ndPerson: Word('иллюстрируешь', 7),
  singular3rdPerson: Word('иллюстрирует', 7),
  plural1stPerson: Word('иллюстрируем', 7),
  plural2ndPerson: Word('иллюстрируете', 7),
  plural3rdPerson: Word('иллюстрируют', 7),
  masculinePast: Word('иллюстрировал', 7),
  femininePast: Word('иллюстрировала', 7),
  neuterPast: Word('иллюстрировало', 7),
  pluralPast: Word('иллюстрировали', 7),
  imperativeInformal: Word('иллюстрируй', 7),
  imperativeFormal: Word('иллюстрируйте', 7),
  imperfect: [],
};

perfectVerbs.set(иллюстрировать.name.text, иллюстрировать);

export { иллюстрировать };