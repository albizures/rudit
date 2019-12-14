import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завоевать: PerfectVerb = {
  name: Word('завоевать', 6),
  singular1stPerson: Word('завоюю', 4),
  singular2ndPerson: Word('завоюешь', 4),
  singular3rdPerson: Word('завоюет', 4),
  plural1stPerson: Word('завоюем', 4),
  plural2ndPerson: Word('завоюете', 4),
  plural3rdPerson: Word('завоюют', 4),
  masculinePast: Word('завоевал', 6),
  femininePast: Word('завоевала', 6),
  neuterPast: Word('завоевало', 6),
  pluralPast: Word('завоевали', 6),
  imperativeInformal: Word('завоюй', 4),
  imperativeFormal: Word('завоюйте', 4),
  imperfect: ['завоёвывать'],
};

perfectVerbs.set(завоевать.name.text, завоевать);

export { завоевать };