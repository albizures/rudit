import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const табанить: PerfectVerb = {
  name: Word('табанить', 3),
  singular1stPerson: Word('табаню', 3),
  singular2ndPerson: Word('табанишь', 3),
  singular3rdPerson: Word('табанит', 3),
  plural1stPerson: Word('табаним', 3),
  plural2ndPerson: Word('табаните', 3),
  plural3rdPerson: Word('табанят', 3),
  masculinePast: Word('табанил', 3),
  femininePast: Word('табанила', 3),
  neuterPast: Word('табанило', 3),
  pluralPast: Word('табанили', 3),
  imperativeInformal: Word('табань', 3),
  imperativeFormal: Word('табаньте', 3),
  imperfect: [],
};

perfectVerbs.set(табанить.name.text, табанить);

export { табанить };