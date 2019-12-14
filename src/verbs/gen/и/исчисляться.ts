import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчисляться: PerfectVerb = {
  name: Word('исчисляться', 6),
  singular1stPerson: Word('исчисляюсь', 6),
  singular2ndPerson: Word('исчисляешься', 6),
  singular3rdPerson: Word('исчисляется', 6),
  plural1stPerson: Word('исчисляемся', 6),
  plural2ndPerson: Word('исчисляетесь', 6),
  plural3rdPerson: Word('исчисляются', 6),
  masculinePast: Word('исчислялся', 6),
  femininePast: Word('исчислялась', 6),
  neuterPast: Word('исчислялось', 6),
  pluralPast: Word('исчислялись', 6),
  imperativeInformal: Word('исчисляйся', 6),
  imperativeFormal: Word('исчисляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(исчисляться.name.text, исчисляться);

export { исчисляться };