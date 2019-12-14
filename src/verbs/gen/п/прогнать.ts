import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнать: PerfectVerb = {
  name: Word('прогнать', 5),
  singular1stPerson: Word('прогоню', 6),
  singular2ndPerson: Word('прогонишь', 4),
  singular3rdPerson: Word('прогонит', 4),
  plural1stPerson: Word('прогоним', 4),
  plural2ndPerson: Word('прогоните', 4),
  plural3rdPerson: Word('прогонят', 4),
  masculinePast: Word('прогнал', 5),
  femininePast: Word('прогнала', 7),
  neuterPast: Word('прогнало', 5),
  pluralPast: Word('прогнали', 5),
  imperativeInformal: Word('прогони', 6),
  imperativeFormal: Word('прогоните', 6),
  imperfect: [],
};

perfectVerbs.set(прогнать.name.text, прогнать);

export { прогнать };