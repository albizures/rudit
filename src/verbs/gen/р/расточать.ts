import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расточать: PerfectVerb = {
  name: Word('расточать', 6),
  singular1stPerson: Word('расточаю', 6),
  singular2ndPerson: Word('расточаешь', 6),
  singular3rdPerson: Word('расточает', 6),
  plural1stPerson: Word('расточаем', 6),
  plural2ndPerson: Word('расточаете', 6),
  plural3rdPerson: Word('расточают', 6),
  masculinePast: Word('расточал', 6),
  femininePast: Word('расточала', 6),
  neuterPast: Word('расточало', 6),
  pluralPast: Word('расточали', 6),
  imperativeInformal: Word('расточай', 6),
  imperativeFormal: Word('расточайте', 6),
  imperfect: [],
};

perfectVerbs.set(расточать.name.text, расточать);

export { расточать };