import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посягать: PerfectVerb = {
  name: Word('посягать', 5),
  singular1stPerson: Word('посягаю', 5),
  singular2ndPerson: Word('посягаешь', 5),
  singular3rdPerson: Word('посягает', 5),
  plural1stPerson: Word('посягаем', 5),
  plural2ndPerson: Word('посягаете', 5),
  plural3rdPerson: Word('посягают', 5),
  masculinePast: Word('посягал', 5),
  femininePast: Word('посягала', 5),
  neuterPast: Word('посягало', 5),
  pluralPast: Word('посягали', 5),
  imperativeInformal: Word('посягай', 5),
  imperativeFormal: Word('посягайте', 5),
  imperfect: [],
};

perfectVerbs.set(посягать.name.text, посягать);

export { посягать };