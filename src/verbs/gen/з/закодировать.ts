import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закодировать: PerfectVerb = {
  name: Word('закодировать', 5),
  singular1stPerson: Word('закодирую', 5),
  singular2ndPerson: Word('закодируешь', 5),
  singular3rdPerson: Word('закодирует', 5),
  plural1stPerson: Word('закодируем', 5),
  plural2ndPerson: Word('закодируете', 5),
  plural3rdPerson: Word('закодируют', 5),
  masculinePast: Word('закодировал', 5),
  femininePast: Word('закодировала', 5),
  neuterPast: Word('закодировало', 5),
  pluralPast: Word('закодировали', 5),
  imperativeInformal: Word('закодируй', 5),
  imperativeFormal: Word('закодируйте', 5),
  imperfect: [],
};

perfectVerbs.set(закодировать.name.text, закодировать);

export { закодировать };