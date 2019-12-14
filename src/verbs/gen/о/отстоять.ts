import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстоять: PerfectVerb = {
  name: Word('отстоять', 5),
  singular1stPerson: Word('отстою', 5),
  singular2ndPerson: Word('отстоишь', 5),
  singular3rdPerson: Word('отстоит', 5),
  plural1stPerson: Word('отстоим', 5),
  plural2ndPerson: Word('отстоите', 5),
  plural3rdPerson: Word('отстоят', 5),
  masculinePast: Word('отстоял', 5),
  femininePast: Word('отстояла', 5),
  neuterPast: Word('отстояло', 5),
  pluralPast: Word('отстояли', 5),
  imperativeInformal: Word('отстой', 4),
  imperativeFormal: Word('отстойте', 4),
  imperfect: ['отстаивать'],
};

perfectVerbs.set(отстоять.name.text, отстоять);

export { отстоять };