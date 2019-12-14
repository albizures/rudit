import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запищать: PerfectVerb = {
  name: Word('запищать', 5),
  singular1stPerson: Word('запищу', 5),
  singular2ndPerson: Word('запищишь', 5),
  singular3rdPerson: Word('запищит', 5),
  plural1stPerson: Word('запищим', 5),
  plural2ndPerson: Word('запищите', 5),
  plural3rdPerson: Word('запищат', 5),
  masculinePast: Word('запищал', 5),
  femininePast: Word('запищала', 5),
  neuterPast: Word('запищало', 5),
  pluralPast: Word('запищали', 5),
  imperativeInformal: Word('запищи', 5),
  imperativeFormal: Word('запищите', 5),
  imperfect: [],
};

perfectVerbs.set(запищать.name.text, запищать);

export { запищать };