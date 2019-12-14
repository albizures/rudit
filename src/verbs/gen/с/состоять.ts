import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состоять: PerfectVerb = {
  name: Word('состоять', 5),
  singular1stPerson: Word('состою', 5),
  singular2ndPerson: Word('состоишь', 5),
  singular3rdPerson: Word('состоит', 5),
  plural1stPerson: Word('состоим', 5),
  plural2ndPerson: Word('состоите', 5),
  plural3rdPerson: Word('состоят', 5),
  masculinePast: Word('состоял', 5),
  femininePast: Word('состояла', 5),
  neuterPast: Word('состояло', 5),
  pluralPast: Word('состояли', 5),
  imperativeInformal: Word('состой', 4),
  imperativeFormal: Word('состойте', 4),
  imperfect: [],
};

perfectVerbs.set(состоять.name.text, состоять);

export { состоять };