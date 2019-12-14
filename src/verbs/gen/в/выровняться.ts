import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выровняться: PerfectVerb = {
  name: Word('выровняться', 1),
  singular1stPerson: Word('выровняюсь', 1),
  singular2ndPerson: Word('выровняешься', 1),
  singular3rdPerson: Word('выровняется', 1),
  plural1stPerson: Word('выровняемся', 1),
  plural2ndPerson: Word('выровняетесь', 1),
  plural3rdPerson: Word('выровняются', 1),
  masculinePast: Word('выровнялся', 1),
  femininePast: Word('выровнялась', 1),
  neuterPast: Word('выровнялось', 1),
  pluralPast: Word('выровнялись', 1),
  imperativeInformal: Word('выровняйся', 1),
  imperativeFormal: Word('выровняйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выровняться.name.text, выровняться);

export { выровняться };