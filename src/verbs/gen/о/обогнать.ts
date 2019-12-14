import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогнать: PerfectVerb = {
  name: Word('обогнать', 5),
  singular1stPerson: Word('обгоню', 5),
  singular2ndPerson: Word('обгонишь', 3),
  singular3rdPerson: Word('обгонит', 3),
  plural1stPerson: Word('обгоним', 3),
  plural2ndPerson: Word('обгоните', 3),
  plural3rdPerson: Word('обгонят', 3),
  masculinePast: Word('обогнал', 5),
  femininePast: Word('обогнала', 7),
  neuterPast: Word('обогнало', 5),
  pluralPast: Word('обогнали', 5),
  imperativeInformal: Word('обгони', 5),
  imperativeFormal: Word('обгоните', 5),
  imperfect: [],
};

perfectVerbs.set(обогнать.name.text, обогнать);

export { обогнать };