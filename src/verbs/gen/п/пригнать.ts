import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригнать: PerfectVerb = {
  name: Word('пригнать', 5),
  singular1stPerson: Word('пригоню', 6),
  singular2ndPerson: Word('пригонишь', 4),
  singular3rdPerson: Word('пригонит', 4),
  plural1stPerson: Word('пригоним', 4),
  plural2ndPerson: Word('пригоните', 4),
  plural3rdPerson: Word('пригонят', 4),
  masculinePast: Word('пригнал', 5),
  femininePast: Word('пригнала', 7),
  neuterPast: Word('пригнало', 5),
  pluralPast: Word('пригнали', 5),
  imperativeInformal: Word('пригони', 6),
  imperativeFormal: Word('пригоните', 6),
  imperfect: [],
};

perfectVerbs.set(пригнать.name.text, пригнать);

export { пригнать };