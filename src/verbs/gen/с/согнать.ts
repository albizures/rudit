import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согнать: PerfectVerb = {
  name: Word('согнать', 4),
  singular1stPerson: Word('сгоню', 4),
  singular2ndPerson: Word('сгонишь', 2),
  singular3rdPerson: Word('сгонит', 2),
  plural1stPerson: Word('сгоним', 2),
  plural2ndPerson: Word('сгоните', 2),
  plural3rdPerson: Word('сгонят', 2),
  masculinePast: Word('согнал', 4),
  femininePast: Word('согнала', 6),
  neuterPast: Word('согнало', 4),
  pluralPast: Word('согнали', 4),
  imperativeInformal: Word('сгони', 4),
  imperativeFormal: Word('сгоните', 4),
  imperfect: [],
};

perfectVerbs.set(согнать.name.text, согнать);

export { согнать };