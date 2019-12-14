import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избавить: PerfectVerb = {
  name: Word('избавить', 3),
  singular1stPerson: Word('избавлю', 3),
  singular2ndPerson: Word('избавишь', 3),
  singular3rdPerson: Word('избавит', 3),
  plural1stPerson: Word('избавим', 3),
  plural2ndPerson: Word('избавите', 3),
  plural3rdPerson: Word('избавят', 3),
  masculinePast: Word('избавил', 3),
  femininePast: Word('избавила', 3),
  neuterPast: Word('избавило', 3),
  pluralPast: Word('избавили', 3),
  imperativeInformal: Word('избавь', 3),
  imperativeFormal: Word('избавьте', 3),
  imperfect: [],
};

perfectVerbs.set(избавить.name.text, избавить);

export { избавить };