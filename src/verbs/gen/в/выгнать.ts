import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгнать: PerfectVerb = {
  name: Word('выгнать', 1),
  singular1stPerson: Word('выгоню', 1),
  singular2ndPerson: Word('выгонишь', 1),
  singular3rdPerson: Word('выгонит', 1),
  plural1stPerson: Word('выгоним', 1),
  plural2ndPerson: Word('выгоните', 1),
  plural3rdPerson: Word('выгонят', 1),
  masculinePast: Word('выгнал', 1),
  femininePast: Word('выгнала', 1),
  neuterPast: Word('выгнало', 1),
  pluralPast: Word('выгнали', 1),
  imperativeInformal: Word('выгони', 1),
  imperativeFormal: Word('выгоните', 1),
  imperfect: ['выгонять'],
};

perfectVerbs.set(выгнать.name.text, выгнать);

export { выгнать };