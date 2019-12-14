import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылупляться: PerfectVerb = {
  name: Word('вылупляться', 6),
  singular1stPerson: Word('вылупляюсь', 6),
  singular2ndPerson: Word('вылупляешься', 6),
  singular3rdPerson: Word('вылупляется', 6),
  plural1stPerson: Word('вылупляемся', 6),
  plural2ndPerson: Word('вылупляетесь', 6),
  plural3rdPerson: Word('вылупляются', 6),
  masculinePast: Word('вылуплялся', 6),
  femininePast: Word('вылуплялась', 6),
  neuterPast: Word('вылуплялось', 6),
  pluralPast: Word('вылуплялись', 6),
  imperativeInformal: Word('вылупляйся', 6),
  imperativeFormal: Word('вылупляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вылупляться.name.text, вылупляться);

export { вылупляться };