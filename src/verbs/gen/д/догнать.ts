import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догнать: PerfectVerb = {
  name: Word('догнать', 4),
  singular1stPerson: Word('догоню', 5),
  singular2ndPerson: Word('догонишь', 3),
  singular3rdPerson: Word('догонит', 3),
  plural1stPerson: Word('догоним', 3),
  plural2ndPerson: Word('догоните', 3),
  plural3rdPerson: Word('догонят', 3),
  masculinePast: Word('догнал', 4),
  femininePast: Word('догнала', 6),
  neuterPast: Word('догнало', 4),
  pluralPast: Word('догнали', 4),
  imperativeInformal: Word('догони', 5),
  imperativeFormal: Word('догоните', 5),
  imperfect: ['догонять'],
};

perfectVerbs.set(догнать.name.text, догнать);

export { догнать };