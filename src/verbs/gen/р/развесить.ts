import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развесить: PerfectVerb = {
  name: Word('развесить', 4),
  singular1stPerson: Word('развешу', 4),
  singular2ndPerson: Word('развесишь', 4),
  singular3rdPerson: Word('развесит', 4),
  plural1stPerson: Word('развесим', 4),
  plural2ndPerson: Word('развесите', 4),
  plural3rdPerson: Word('развесят', 4),
  masculinePast: Word('развесил', 4),
  femininePast: Word('развесила', 4),
  neuterPast: Word('развесило', 4),
  pluralPast: Word('развесили', 4),
  imperativeInformal: Word('развесь', 4),
  imperativeFormal: Word('развесьте', 4),
  imperfect: [],
};

perfectVerbs.set(развесить.name.text, развесить);

export { развесить };