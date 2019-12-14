import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправляться: PerfectVerb = {
  name: Word('оправляться', 6),
  singular1stPerson: Word('оправляюсь', 6),
  singular2ndPerson: Word('оправляешься', 6),
  singular3rdPerson: Word('оправляется', 6),
  plural1stPerson: Word('оправляемся', 6),
  plural2ndPerson: Word('оправляетесь', 6),
  plural3rdPerson: Word('оправляются', 6),
  masculinePast: Word('оправлялся', 6),
  femininePast: Word('оправлялась', 6),
  neuterPast: Word('оправлялось', 6),
  pluralPast: Word('оправлялись', 6),
  imperativeInformal: Word('оправляйся', 6),
  imperativeFormal: Word('оправляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(оправляться.name.text, оправляться);

export { оправляться };