import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлохматить: PerfectVerb = {
  name: Word('взлохматить', 6),
  singular1stPerson: Word('взлохмачу', 6),
  singular2ndPerson: Word('взлохматишь', 6),
  singular3rdPerson: Word('взлохматит', 6),
  plural1stPerson: Word('взлохматим', 6),
  plural2ndPerson: Word('взлохматите', 6),
  plural3rdPerson: Word('взлохматят', 6),
  masculinePast: Word('взлохматил', 6),
  femininePast: Word('взлохматила', 6),
  neuterPast: Word('взлохматило', 6),
  pluralPast: Word('взлохматили', 6),
  imperativeInformal: Word('взлохмать', 6),
  imperativeFormal: Word('взлохматьте', 6),
  imperfect: [],
};

perfectVerbs.set(взлохматить.name.text, взлохматить);

export { взлохматить };