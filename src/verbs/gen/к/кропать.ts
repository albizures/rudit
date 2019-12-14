import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кропать: PerfectVerb = {
  name: Word('кропать', 4),
  singular1stPerson: Word('кропаю', 4),
  singular2ndPerson: Word('кропаешь', 4),
  singular3rdPerson: Word('кропает', 4),
  plural1stPerson: Word('кропаем', 4),
  plural2ndPerson: Word('кропаете', 4),
  plural3rdPerson: Word('кропают', 4),
  masculinePast: Word('кропал', 4),
  femininePast: Word('кропала', 4),
  neuterPast: Word('кропало', 4),
  pluralPast: Word('кропали', 4),
  imperativeInformal: Word('кропай', 4),
  imperativeFormal: Word('кропайте', 4),
  imperfect: [],
};

perfectVerbs.set(кропать.name.text, кропать);

export { кропать };