import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const косматить: PerfectVerb = {
  name: Word('косматить', 4),
  singular1stPerson: Word('космачу', 4),
  singular2ndPerson: Word('косматишь', 4),
  singular3rdPerson: Word('косматит', 4),
  plural1stPerson: Word('косматим', 4),
  plural2ndPerson: Word('косматите', 4),
  plural3rdPerson: Word('косматят', 4),
  masculinePast: Word('косматил', 4),
  femininePast: Word('косматила', 4),
  neuterPast: Word('косматило', 4),
  pluralPast: Word('косматили', 4),
  imperativeInformal: Word('космать', 4),
  imperativeFormal: Word('косматьте', 4),
  imperfect: [],
};

perfectVerbs.set(косматить.name.text, косматить);

export { косматить };