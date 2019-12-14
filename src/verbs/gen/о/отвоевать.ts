import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвоевать: PerfectVerb = {
  name: Word('отвоевать', 6),
  singular1stPerson: Word('отвоюю', 4),
  singular2ndPerson: Word('отвоюешь', 4),
  singular3rdPerson: Word('отвоюет', 4),
  plural1stPerson: Word('отвоюем', 4),
  plural2ndPerson: Word('отвоюете', 4),
  plural3rdPerson: Word('отвоюют', 4),
  masculinePast: Word('отвоевал', 6),
  femininePast: Word('отвоевала', 6),
  neuterPast: Word('отвоевало', 6),
  pluralPast: Word('отвоевали', 6),
  imperativeInformal: Word('отвоюй', 4),
  imperativeFormal: Word('отвоюйте', 4),
  imperfect: [],
};

perfectVerbs.set(отвоевать.name.text, отвоевать);

export { отвоевать };