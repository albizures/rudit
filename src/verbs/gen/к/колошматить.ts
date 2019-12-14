import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колошматить: PerfectVerb = {
  name: Word('колошматить', 6),
  singular1stPerson: Word('колошмачу', 6),
  singular2ndPerson: Word('колошматишь', 6),
  singular3rdPerson: Word('колошматит', 6),
  plural1stPerson: Word('колошматим', 6),
  plural2ndPerson: Word('колошматите', 6),
  plural3rdPerson: Word('колошматят', 6),
  masculinePast: Word('колошматил', 6),
  femininePast: Word('колошматила', 6),
  neuterPast: Word('колошматило', 6),
  pluralPast: Word('колошматили', 6),
  imperativeInformal: Word('колошмать', 6),
  imperativeFormal: Word('колошматьте', 6),
  imperfect: [],
};

perfectVerbs.set(колошматить.name.text, колошматить);

export { колошматить };