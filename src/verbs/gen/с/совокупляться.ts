import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совокупляться: PerfectVerb = {
  name: Word('совокупляться', 8),
  singular1stPerson: Word('совокупляюсь', 8),
  singular2ndPerson: Word('совокупляешься', 8),
  singular3rdPerson: Word('совокупляется', 8),
  plural1stPerson: Word('совокупляемся', 8),
  plural2ndPerson: Word('совокупляетесь', 8),
  plural3rdPerson: Word('совокупляются', 8),
  masculinePast: Word('совокуплялся', 8),
  femininePast: Word('совокуплялась', 8),
  neuterPast: Word('совокуплялось', 8),
  pluralPast: Word('совокуплялись', 8),
  imperativeInformal: Word('совокупляйся', 8),
  imperativeFormal: Word('совокупляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(совокупляться.name.text, совокупляться);

export { совокупляться };