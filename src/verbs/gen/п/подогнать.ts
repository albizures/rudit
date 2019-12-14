import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подогнать: PerfectVerb = {
  name: Word('подогнать', 6),
  singular1stPerson: Word('подгоню', 6),
  singular2ndPerson: Word('подгонишь', 4),
  singular3rdPerson: Word('подгонит', 4),
  plural1stPerson: Word('подгоним', 4),
  plural2ndPerson: Word('подгоните', 4),
  plural3rdPerson: Word('подгонят', 4),
  masculinePast: Word('подогнал', 6),
  femininePast: Word('подогнала', 8),
  neuterPast: Word('подогнало', 6),
  pluralPast: Word('подогнали', 6),
  imperativeInformal: Word('подгони', 6),
  imperativeFormal: Word('подгоните', 6),
  imperfect: ['подгонять'],
};

perfectVerbs.set(подогнать.name.text, подогнать);

export { подогнать };