import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кодировать: PerfectVerb = {
  name: Word('кодировать', 3),
  singular1stPerson: Word('кодирую', 3),
  singular2ndPerson: Word('кодируешь', 3),
  singular3rdPerson: Word('кодирует', 3),
  plural1stPerson: Word('кодируем', 3),
  plural2ndPerson: Word('кодируете', 3),
  plural3rdPerson: Word('кодируют', 3),
  masculinePast: Word('кодировал', 3),
  femininePast: Word('кодировала', 3),
  neuterPast: Word('кодировало', 3),
  pluralPast: Word('кодировали', 3),
  imperativeInformal: Word('кодируй', 3),
  imperativeFormal: Word('кодируйте', 3),
  imperfect: [],
};

perfectVerbs.set(кодировать.name.text, кодировать);

export { кодировать };