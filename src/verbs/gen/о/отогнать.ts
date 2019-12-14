import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отогнать: PerfectVerb = {
  name: Word('отогнать', 5),
  singular1stPerson: Word('отгоню', 5),
  singular2ndPerson: Word('отгонишь', 3),
  singular3rdPerson: Word('отгонит', 3),
  plural1stPerson: Word('отгоним', 3),
  plural2ndPerson: Word('отгоните', 3),
  plural3rdPerson: Word('отгонят', 3),
  masculinePast: Word('отогнал', 5),
  femininePast: Word('отогнала', 7),
  neuterPast: Word('отогнало', 5),
  pluralPast: Word('отогнали', 5),
  imperativeInformal: Word('отгони', 5),
  imperativeFormal: Word('отгоните', 5),
  imperfect: [],
};

perfectVerbs.set(отогнать.name.text, отогнать);

export { отогнать };