import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постоять: PerfectVerb = {
  name: Word('постоять', 5),
  singular1stPerson: Word('постою', 5),
  singular2ndPerson: Word('постоишь', 5),
  singular3rdPerson: Word('постоит', 5),
  plural1stPerson: Word('постоим', 5),
  plural2ndPerson: Word('постоите', 5),
  plural3rdPerson: Word('постоят', 5),
  masculinePast: Word('постоял', 5),
  femininePast: Word('постояла', 5),
  neuterPast: Word('постояло', 5),
  pluralPast: Word('постояли', 5),
  imperativeInformal: Word('постой', 4),
  imperativeFormal: Word('постойте', 4),
  imperfect: ['стоять'],
};

perfectVerbs.set(постоять.name.text, постоять);

export { постоять };