import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накидывать: PerfectVerb = {
  name: Word('накидывать', 3),
  singular1stPerson: Word('накидываю', 3),
  singular2ndPerson: Word('накидываешь', 3),
  singular3rdPerson: Word('накидывает', 3),
  plural1stPerson: Word('накидываем', 3),
  plural2ndPerson: Word('накидываете', 3),
  plural3rdPerson: Word('накидывают', 3),
  masculinePast: Word('накидывал', 3),
  femininePast: Word('накидывала', 3),
  neuterPast: Word('накидывало', 3),
  pluralPast: Word('накидывали', 3),
  imperativeInformal: Word('накидывай', 3),
  imperativeFormal: Word('накидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(накидывать.name.text, накидывать);

export { накидывать };