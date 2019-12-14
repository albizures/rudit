import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стоять: PerfectVerb = {
  name: Word('стоять', 3),
  singular1stPerson: Word('стою', 3),
  singular2ndPerson: Word('стоишь', 3),
  singular3rdPerson: Word('стоит', 3),
  plural1stPerson: Word('стоим', 3),
  plural2ndPerson: Word('стоите', 3),
  plural3rdPerson: Word('стоят', 3),
  masculinePast: Word('стоял', 3),
  femininePast: Word('стояла', 3),
  neuterPast: Word('стояло', 3),
  pluralPast: Word('стояли', 3),
  imperativeInformal: Word('стой', 2),
  imperativeFormal: Word('стойте', 2),
  imperfect: ['постоять'],
};

perfectVerbs.set(стоять.name.text, стоять);

export { стоять };