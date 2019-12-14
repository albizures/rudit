import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приласкать: PerfectVerb = {
  name: Word('приласкать', 7),
  singular1stPerson: Word('приласкаю', 7),
  singular2ndPerson: Word('приласкаешь', 7),
  singular3rdPerson: Word('приласкает', 7),
  plural1stPerson: Word('приласкаем', 7),
  plural2ndPerson: Word('приласкаете', 7),
  plural3rdPerson: Word('приласкают', 7),
  masculinePast: Word('приласкал', 7),
  femininePast: Word('приласкала', 7),
  neuterPast: Word('приласкало', 7),
  pluralPast: Word('приласкали', 7),
  imperativeInformal: Word('приласкай', 7),
  imperativeFormal: Word('приласкайте', 7),
  imperfect: [],
};

perfectVerbs.set(приласкать.name.text, приласкать);

export { приласкать };