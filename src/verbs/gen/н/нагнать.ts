import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагнать: PerfectVerb = {
  name: Word('нагнать', 4),
  singular1stPerson: Word('нагоню', 5),
  singular2ndPerson: Word('нагонишь', 3),
  singular3rdPerson: Word('нагонит', 3),
  plural1stPerson: Word('нагоним', 3),
  plural2ndPerson: Word('нагоните', 3),
  plural3rdPerson: Word('нагонят', 3),
  masculinePast: Word('нагнал', 4),
  femininePast: Word('нагнала', 6),
  neuterPast: Word('нагнало', 4),
  pluralPast: Word('нагнали', 4),
  imperativeInformal: Word('нагони', 5),
  imperativeFormal: Word('нагоните', 5),
  imperfect: [],
};

perfectVerbs.set(нагнать.name.text, нагнать);

export { нагнать };