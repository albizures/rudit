import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвесить: PerfectVerb = {
  name: Word('подвесить', 4),
  singular1stPerson: Word('подвешу', 4),
  singular2ndPerson: Word('подвесишь', 4),
  singular3rdPerson: Word('подвесит', 4),
  plural1stPerson: Word('подвесим', 4),
  plural2ndPerson: Word('подвесите', 4),
  plural3rdPerson: Word('подвесят', 4),
  masculinePast: Word('подвесил', 4),
  femininePast: Word('подвесила', 4),
  neuterPast: Word('подвесило', 4),
  pluralPast: Word('подвесили', 4),
  imperativeInformal: Word('подвесь', 4),
  imperativeFormal: Word('подвесьте', 4),
  imperfect: [],
};

perfectVerbs.set(подвесить.name.text, подвесить);

export { подвесить };