import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посылать: PerfectVerb = {
  name: Word('посылать', 5),
  singular1stPerson: Word('посылаю', 5),
  singular2ndPerson: Word('посылаешь', 5),
  singular3rdPerson: Word('посылает', 5),
  plural1stPerson: Word('посылаем', 5),
  plural2ndPerson: Word('посылаете', 5),
  plural3rdPerson: Word('посылают', 5),
  masculinePast: Word('посылал', 5),
  femininePast: Word('посылала', 5),
  neuterPast: Word('посылало', 5),
  pluralPast: Word('посылали', 5),
  imperativeInformal: Word('посылай', 5),
  imperativeFormal: Word('посылайте', 5),
  imperfect: ['послать'],
};

perfectVerbs.set(посылать.name.text, посылать);

export { посылать };