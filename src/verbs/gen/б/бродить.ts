import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бродить: PerfectVerb = {
  name: Word('бродить', 4),
  singular1stPerson: Word('брожу', 4),
  singular2ndPerson: Word('бродишь', 2),
  singular3rdPerson: Word('бродит', 2),
  plural1stPerson: Word('бродим', 2),
  plural2ndPerson: Word('бродите', 2),
  plural3rdPerson: Word('бродят', 2),
  masculinePast: Word('бродил', 4),
  femininePast: Word('бродила', 4),
  neuterPast: Word('бродило', 4),
  pluralPast: Word('бродили', 4),
  imperativeInformal: Word('броди', 4),
  imperativeFormal: Word('бродите', 4),
  imperfect: [],
};

perfectVerbs.set(бродить.name.text, бродить);

export { бродить };