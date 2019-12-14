import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корчевать: PerfectVerb = {
  name: Word('корчевать', 6),
  singular1stPerson: Word('корчую', 4),
  singular2ndPerson: Word('корчуешь', 4),
  singular3rdPerson: Word('корчует', 4),
  plural1stPerson: Word('корчуем', 4),
  plural2ndPerson: Word('корчуете', 4),
  plural3rdPerson: Word('корчуют', 4),
  masculinePast: Word('корчевал', 6),
  femininePast: Word('корчевала', 6),
  neuterPast: Word('корчевало', 6),
  pluralPast: Word('корчевали', 6),
  imperativeInformal: Word('корчуй', 4),
  imperativeFormal: Word('корчуйте', 4),
  imperfect: [],
};

perfectVerbs.set(корчевать.name.text, корчевать);

export { корчевать };