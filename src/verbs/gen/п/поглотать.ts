import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглотать: PerfectVerb = {
  name: Word('поглотать', 6),
  singular1stPerson: Word('поглотаю', 6),
  singular2ndPerson: Word('поглотаешь', 6),
  singular3rdPerson: Word('поглотает', 6),
  plural1stPerson: Word('поглотаем', 6),
  plural2ndPerson: Word('поглотаете', 6),
  plural3rdPerson: Word('поглотают', 6),
  masculinePast: Word('поглотал', 6),
  femininePast: Word('поглотала', 6),
  neuterPast: Word('поглотало', 6),
  pluralPast: Word('поглотали', 6),
  imperativeInformal: Word('поглотай', 6),
  imperativeFormal: Word('поглотайте', 6),
  imperfect: [],
};

perfectVerbs.set(поглотать.name.text, поглотать);

export { поглотать };