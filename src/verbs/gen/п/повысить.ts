import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повысить: PerfectVerb = {
  name: Word('повысить', 3),
  singular1stPerson: Word('повышу', 3),
  singular2ndPerson: Word('повысишь', 3),
  singular3rdPerson: Word('повысит', 3),
  plural1stPerson: Word('повысим', 3),
  plural2ndPerson: Word('повысите', 3),
  plural3rdPerson: Word('повысят', 3),
  masculinePast: Word('повысил', 3),
  femininePast: Word('повысила', 3),
  neuterPast: Word('повысило', 3),
  pluralPast: Word('повысили', 3),
  imperativeInformal: Word('повысь', 3),
  imperativeFormal: Word('повысьте', 3),
  imperfect: [],
};

perfectVerbs.set(повысить.name.text, повысить);

export { повысить };