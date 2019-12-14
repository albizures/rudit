import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оживляться: PerfectVerb = {
  name: Word('оживляться', 5),
  singular1stPerson: Word('оживляюсь', 5),
  singular2ndPerson: Word('оживляешься', 5),
  singular3rdPerson: Word('оживляется', 5),
  plural1stPerson: Word('оживляемся', 5),
  plural2ndPerson: Word('оживляетесь', 5),
  plural3rdPerson: Word('оживляются', 5),
  masculinePast: Word('оживлялся', 5),
  femininePast: Word('оживлялась', 5),
  neuterPast: Word('оживлялось', 5),
  pluralPast: Word('оживлялись', 5),
  imperativeInformal: Word('оживляйся', 5),
  imperativeFormal: Word('оживляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оживляться.name.text, оживляться);

export { оживляться };