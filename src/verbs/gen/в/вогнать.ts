import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вогнать: PerfectVerb = {
  name: Word('вогнать', 4),
  singular1stPerson: Word('вгоню', 4),
  singular2ndPerson: Word('вгонишь', 2),
  singular3rdPerson: Word('вгонит', 2),
  plural1stPerson: Word('вгоним', 2),
  plural2ndPerson: Word('вгоните', 2),
  plural3rdPerson: Word('вгонят', 2),
  masculinePast: Word('вогнал', 4),
  femininePast: Word('вогнала', 6),
  neuterPast: Word('вогнало', 4),
  pluralPast: Word('вогнали', 4),
  imperativeInformal: Word('вгони', 4),
  imperativeFormal: Word('вгоните', 4),
  imperfect: [],
};

perfectVerbs.set(вогнать.name.text, вогнать);

export { вогнать };