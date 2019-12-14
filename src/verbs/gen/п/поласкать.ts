import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поласкать: PerfectVerb = {
  name: Word('поласкать', 6),
  singular1stPerson: Word('поласкаю', 6),
  singular2ndPerson: Word('поласкаешь', 6),
  singular3rdPerson: Word('поласкает', 6),
  plural1stPerson: Word('поласкаем', 6),
  plural2ndPerson: Word('поласкаете', 6),
  plural3rdPerson: Word('поласкают', 6),
  masculinePast: Word('поласкал', 6),
  femininePast: Word('поласкала', 6),
  neuterPast: Word('поласкало', 6),
  pluralPast: Word('поласкали', 6),
  imperativeInformal: Word('поласкай', 6),
  imperativeFormal: Word('поласкайте', 6),
  imperfect: [],
};

perfectVerbs.set(поласкать.name.text, поласкать);

export { поласкать };