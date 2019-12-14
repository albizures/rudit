import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгнать: PerfectVerb = {
  name: Word('изгнать', 4),
  singular1stPerson: Word('изгоню', 5),
  singular2ndPerson: Word('изгонишь', 3),
  singular3rdPerson: Word('изгонит', 3),
  plural1stPerson: Word('изгоним', 3),
  plural2ndPerson: Word('изгоните', 3),
  plural3rdPerson: Word('изгонят', 3),
  masculinePast: Word('изгнал', 4),
  femininePast: Word('изгнала', 6),
  neuterPast: Word('изгнало', 4),
  pluralPast: Word('изгнали', 4),
  imperativeInformal: Word('изгони', 5),
  imperativeFormal: Word('изгоните', 5),
  imperfect: [],
};

perfectVerbs.set(изгнать.name.text, изгнать);

export { изгнать };