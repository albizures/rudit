import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстоять: PerfectVerb = {
  name: Word('обстоять', 5),
  singular1stPerson: Word('обстою', 5),
  singular2ndPerson: Word('обстоишь', 5),
  singular3rdPerson: Word('обстоит', 5),
  plural1stPerson: Word('обстоим', 5),
  plural2ndPerson: Word('обстоите', 5),
  plural3rdPerson: Word('обстоят', 5),
  masculinePast: Word('обстоял', 5),
  femininePast: Word('обстояла', 5),
  neuterPast: Word('обстояло', 5),
  pluralPast: Word('обстояли', 5),
  imperativeInformal: Word('обстой', 4),
  imperativeFormal: Word('обстойте', 4),
  imperfect: [],
};

perfectVerbs.set(обстоять.name.text, обстоять);

export { обстоять };