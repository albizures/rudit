import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const звенеть: PerfectVerb = {
  name: Word('звенеть', 4),
  singular1stPerson: Word('звеню', 4),
  singular2ndPerson: Word('звенишь', 4),
  singular3rdPerson: Word('звенит', 4),
  plural1stPerson: Word('звеним', 4),
  plural2ndPerson: Word('звените', 4),
  plural3rdPerson: Word('звенят', 4),
  masculinePast: Word('звенел', 4),
  femininePast: Word('звенела', 4),
  neuterPast: Word('звенело', 4),
  pluralPast: Word('звенели', 4),
  imperativeInformal: Word('звени', 4),
  imperativeFormal: Word('звените', 4),
  imperfect: [],
};

perfectVerbs.set(звенеть.name.text, звенеть);

export { звенеть };