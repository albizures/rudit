import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лупцевать: PerfectVerb = {
  name: Word('лупцевать', 6),
  singular1stPerson: Word('лупцую', 4),
  singular2ndPerson: Word('лупцуешь', 4),
  singular3rdPerson: Word('лупцует', 4),
  plural1stPerson: Word('лупцуем', 4),
  plural2ndPerson: Word('лупцуете', 4),
  plural3rdPerson: Word('лупцуют', 4),
  masculinePast: Word('лупцевал', 6),
  femininePast: Word('лупцевала', 6),
  neuterPast: Word('лупцевало', 6),
  pluralPast: Word('лупцевали', 6),
  imperativeInformal: Word('лупцуй', 4),
  imperativeFormal: Word('лупцуйте', 4),
  imperfect: [],
};

perfectVerbs.set(лупцевать.name.text, лупцевать);

export { лупцевать };