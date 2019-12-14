import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогнать: PerfectVerb = {
  name: Word('разогнать', 6),
  singular1stPerson: Word('разгоню', 6),
  singular2ndPerson: Word('разгонишь', 4),
  singular3rdPerson: Word('разгонит', 4),
  plural1stPerson: Word('разгоним', 4),
  plural2ndPerson: Word('разгоните', 4),
  plural3rdPerson: Word('разгонят', 4),
  masculinePast: Word('разогнал', 6),
  femininePast: Word('разогнала', 8),
  neuterPast: Word('разогнало', 6),
  pluralPast: Word('разогнали', 6),
  imperativeInformal: Word('разгони', 6),
  imperativeFormal: Word('разгоните', 6),
  imperfect: [],
};

perfectVerbs.set(разогнать.name.text, разогнать);

export { разогнать };