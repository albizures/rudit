import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вцепляться: PerfectVerb = {
  name: Word('вцепляться', 5),
  singular1stPerson: Word('вцепляюсь', 5),
  singular2ndPerson: Word('вцепляешься', 5),
  singular3rdPerson: Word('вцепляется', 5),
  plural1stPerson: Word('вцепляемся', 5),
  plural2ndPerson: Word('вцепляетесь', 5),
  plural3rdPerson: Word('вцепляются', 5),
  masculinePast: Word('вцеплялся', 5),
  femininePast: Word('вцеплялась', 5),
  neuterPast: Word('вцеплялось', 5),
  pluralPast: Word('вцеплялись', 5),
  imperativeInformal: Word('вцепляйся', 5),
  imperativeFormal: Word('вцепляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вцепляться.name.text, вцепляться);

export { вцепляться };