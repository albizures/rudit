import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поведать: PerfectVerb = {
  name: Word('поведать', 3),
  singular1stPerson: Word('поведаю', 3),
  singular2ndPerson: Word('поведаешь', 3),
  singular3rdPerson: Word('поведает', 3),
  plural1stPerson: Word('поведаем', 3),
  plural2ndPerson: Word('поведаете', 3),
  plural3rdPerson: Word('поведают', 3),
  masculinePast: Word('поведал', 3),
  femininePast: Word('поведала', 3),
  neuterPast: Word('поведало', 3),
  pluralPast: Word('поведали', 3),
  imperativeInformal: Word('поведай', 3),
  imperativeFormal: Word('поведайте', 3),
  imperfect: [],
};

perfectVerbs.set(поведать.name.text, поведать);

export { поведать };