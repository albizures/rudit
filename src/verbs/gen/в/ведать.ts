import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ведать: PerfectVerb = {
  name: Word('ведать', 1),
  singular1stPerson: Word('ведаю', 1),
  singular2ndPerson: Word('ведаешь', 1),
  singular3rdPerson: Word('ведает', 1),
  plural1stPerson: Word('ведаем', 1),
  plural2ndPerson: Word('ведаете', 1),
  plural3rdPerson: Word('ведают', 1),
  masculinePast: Word('ведал', 1),
  femininePast: Word('ведала', 1),
  neuterPast: Word('ведало', 1),
  pluralPast: Word('ведали', 1),
  imperativeInformal: Word('ведай', 1),
  imperativeFormal: Word('ведайте', 1),
  imperfect: [],
};

perfectVerbs.set(ведать.name.text, ведать);

export { ведать };