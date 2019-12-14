import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простоять: PerfectVerb = {
  name: Word('простоять', 6),
  singular1stPerson: Word('простою', 6),
  singular2ndPerson: Word('простоишь', 6),
  singular3rdPerson: Word('простоит', 6),
  plural1stPerson: Word('простоим', 6),
  plural2ndPerson: Word('простоите', 6),
  plural3rdPerson: Word('простоят', 6),
  masculinePast: Word('простоял', 6),
  femininePast: Word('простояла', 6),
  neuterPast: Word('простояло', 6),
  pluralPast: Word('простояли', 6),
  imperativeInformal: Word('простой', 5),
  imperativeFormal: Word('простойте', 5),
  imperfect: [],
};

perfectVerbs.set(простоять.name.text, простоять);

export { простоять };