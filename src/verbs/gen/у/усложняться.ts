import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усложняться: PerfectVerb = {
  name: Word('усложняться', 6),
  singular1stPerson: Word('усложняюсь', 6),
  singular2ndPerson: Word('усложняешься', 6),
  singular3rdPerson: Word('усложняется', 6),
  plural1stPerson: Word('усложняемся', 6),
  plural2ndPerson: Word('усложняетесь', 6),
  plural3rdPerson: Word('усложняются', 6),
  masculinePast: Word('усложнялся', 6),
  femininePast: Word('усложнялась', 6),
  neuterPast: Word('усложнялось', 6),
  pluralPast: Word('усложнялись', 6),
  imperativeInformal: Word('усложняйся', 6),
  imperativeFormal: Word('усложняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(усложняться.name.text, усложняться);

export { усложняться };