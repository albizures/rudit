import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настоять: PerfectVerb = {
  name: Word('настоять', 5),
  singular1stPerson: Word('настою', 5),
  singular2ndPerson: Word('настоишь', 5),
  singular3rdPerson: Word('настоит', 5),
  plural1stPerson: Word('настоим', 5),
  plural2ndPerson: Word('настоите', 5),
  plural3rdPerson: Word('настоят', 5),
  masculinePast: Word('настоял', 5),
  femininePast: Word('настояла', 5),
  neuterPast: Word('настояло', 5),
  pluralPast: Word('настояли', 5),
  imperativeInformal: Word('настой', 4),
  imperativeFormal: Word('настойте', 4),
  imperfect: ['настаивать'],
};

perfectVerbs.set(настоять.name.text, настоять);

export { настоять };