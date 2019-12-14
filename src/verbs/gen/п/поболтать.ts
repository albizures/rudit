import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поболтать: PerfectVerb = {
  name: Word('поболтать', 6),
  singular1stPerson: Word('поболтаю', 6),
  singular2ndPerson: Word('поболтаешь', 6),
  singular3rdPerson: Word('поболтает', 6),
  plural1stPerson: Word('поболтаем', 6),
  plural2ndPerson: Word('поболтаете', 6),
  plural3rdPerson: Word('поболтают', 6),
  masculinePast: Word('поболтал', 6),
  femininePast: Word('поболтала', 6),
  neuterPast: Word('поболтало', 6),
  pluralPast: Word('поболтали', 6),
  imperativeInformal: Word('поболтай', 6),
  imperativeFormal: Word('поболтайте', 6),
  imperfect: [],
};

perfectVerbs.set(поболтать.name.text, поболтать);

export { поболтать };