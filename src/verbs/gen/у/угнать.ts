import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угнать: PerfectVerb = {
  name: Word('угнать', 3),
  singular1stPerson: Word('угоню', 4),
  singular2ndPerson: Word('угонишь', 2),
  singular3rdPerson: Word('угонит', 2),
  plural1stPerson: Word('угоним', 2),
  plural2ndPerson: Word('угоните', 2),
  plural3rdPerson: Word('угонят', 2),
  masculinePast: Word('угнал', 3),
  femininePast: Word('угнала', 5),
  neuterPast: Word('угнало', 3),
  pluralPast: Word('угнали', 3),
  imperativeInformal: Word('угони', 4),
  imperativeFormal: Word('угоните', 4),
  imperfect: [],
};

perfectVerbs.set(угнать.name.text, угнать);

export { угнать };