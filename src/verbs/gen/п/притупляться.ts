import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притупляться: PerfectVerb = {
  name: Word('притупляться', 7),
  singular1stPerson: Word('притупляюсь', 7),
  singular2ndPerson: Word('притупляешься', 7),
  singular3rdPerson: Word('притупляется', 7),
  plural1stPerson: Word('притупляемся', 7),
  plural2ndPerson: Word('притупляетесь', 7),
  plural3rdPerson: Word('притупляются', 7),
  masculinePast: Word('притуплялся', 7),
  femininePast: Word('притуплялась', 7),
  neuterPast: Word('притуплялось', 7),
  pluralPast: Word('притуплялись', 7),
  imperativeInformal: Word('притупляйся', 7),
  imperativeFormal: Word('притупляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(притупляться.name.text, притупляться);

export { притупляться };