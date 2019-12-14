import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погнать: PerfectVerb = {
  name: Word('погнать', 4),
  singular1stPerson: Word('погоню', 5),
  singular2ndPerson: Word('погонишь', 3),
  singular3rdPerson: Word('погонит', 3),
  plural1stPerson: Word('погоним', 3),
  plural2ndPerson: Word('погоните', 3),
  plural3rdPerson: Word('погонят', 3),
  masculinePast: Word('погнал', 4),
  femininePast: Word('погнала', 6),
  neuterPast: Word('погнало', 4),
  pluralPast: Word('погнали', 4),
  imperativeInformal: Word('погони', 5),
  imperativeFormal: Word('погоните', 5),
  imperfect: [],
};

perfectVerbs.set(погнать.name.text, погнать);

export { погнать };