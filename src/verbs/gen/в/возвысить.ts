import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвысить: PerfectVerb = {
  name: Word('возвысить', 4),
  singular1stPerson: Word('возвышу', 4),
  singular2ndPerson: Word('возвысишь', 4),
  singular3rdPerson: Word('возвысит', 4),
  plural1stPerson: Word('возвысим', 4),
  plural2ndPerson: Word('возвысите', 4),
  plural3rdPerson: Word('возвысят', 4),
  masculinePast: Word('возвысил', 4),
  femininePast: Word('возвысила', 4),
  neuterPast: Word('возвысило', 4),
  pluralPast: Word('возвысили', 4),
  imperativeInformal: Word('возвысь', 4),
  imperativeFormal: Word('возвысьте', 4),
  imperfect: [],
};

perfectVerbs.set(возвысить.name.text, возвысить);

export { возвысить };