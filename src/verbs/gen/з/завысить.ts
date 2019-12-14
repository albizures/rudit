import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завысить: PerfectVerb = {
  name: Word('завысить', 3),
  singular1stPerson: Word('завышу', 3),
  singular2ndPerson: Word('завысишь', 3),
  singular3rdPerson: Word('завысит', 3),
  plural1stPerson: Word('завысим', 3),
  plural2ndPerson: Word('завысите', 3),
  plural3rdPerson: Word('завысят', 3),
  masculinePast: Word('завысил', 3),
  femininePast: Word('завысила', 3),
  neuterPast: Word('завысило', 3),
  pluralPast: Word('завысили', 3),
  imperativeInformal: Word('завысь', 3),
  imperativeFormal: Word('завысьте', 3),
  imperfect: [],
};

perfectVerbs.set(завысить.name.text, завысить);

export { завысить };