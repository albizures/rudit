import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колобродить: PerfectVerb = {
  name: Word('колобродить', 6),
  singular1stPerson: Word('колоброжу', 6),
  singular2ndPerson: Word('колобродишь', 6),
  singular3rdPerson: Word('колобродит', 6),
  plural1stPerson: Word('колобродим', 6),
  plural2ndPerson: Word('колобродите', 6),
  plural3rdPerson: Word('колобродят', 6),
  masculinePast: Word('колобродил', 6),
  femininePast: Word('колобродила', 6),
  neuterPast: Word('колобродило', 6),
  pluralPast: Word('колобродили', 6),
  imperativeInformal: Word('колобродь', 6),
  imperativeFormal: Word('колобродьте', 6),
  imperfect: [],
};

perfectVerbs.set(колобродить.name.text, колобродить);

export { колобродить };