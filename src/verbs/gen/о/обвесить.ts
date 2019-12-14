import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвесить: PerfectVerb = {
  name: Word('обвесить', 3),
  singular1stPerson: Word('обвешу', 3),
  singular2ndPerson: Word('обвесишь', 3),
  singular3rdPerson: Word('обвесит', 3),
  plural1stPerson: Word('обвесим', 3),
  plural2ndPerson: Word('обвесите', 3),
  plural3rdPerson: Word('обвесят', 3),
  masculinePast: Word('обвесил', 3),
  femininePast: Word('обвесила', 3),
  neuterPast: Word('обвесило', 3),
  pluralPast: Word('обвесили', 3),
  imperativeInformal: Word('обвесь', 3),
  imperativeFormal: Word('обвесьте', 3),
  imperfect: [],
};

perfectVerbs.set(обвесить.name.text, обвесить);

export { обвесить };