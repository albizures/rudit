import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнать: PerfectVerb = {
  name: Word('загнать', 4),
  singular1stPerson: Word('загоню', 5),
  singular2ndPerson: Word('загонишь', 3),
  singular3rdPerson: Word('загонит', 3),
  plural1stPerson: Word('загоним', 3),
  plural2ndPerson: Word('загоните', 3),
  plural3rdPerson: Word('загонят', 3),
  masculinePast: Word('загнал', 4),
  femininePast: Word('загнала', 6),
  neuterPast: Word('загнало', 4),
  pluralPast: Word('загнали', 4),
  imperativeInformal: Word('загони', 5),
  imperativeFormal: Word('загоните', 5),
  imperfect: [],
};

perfectVerbs.set(загнать.name.text, загнать);

export { загнать };