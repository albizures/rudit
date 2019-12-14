import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осложняться: PerfectVerb = {
  name: Word('осложняться', 6),
  singular1stPerson: Word('осложняюсь', 6),
  singular2ndPerson: Word('осложняешься', 6),
  singular3rdPerson: Word('осложняется', 6),
  plural1stPerson: Word('осложняемся', 6),
  plural2ndPerson: Word('осложняетесь', 6),
  plural3rdPerson: Word('осложняются', 6),
  masculinePast: Word('осложнялся', 6),
  femininePast: Word('осложнялась', 6),
  neuterPast: Word('осложнялось', 6),
  pluralPast: Word('осложнялись', 6),
  imperativeInformal: Word('осложняйся', 6),
  imperativeFormal: Word('осложняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(осложняться.name.text, осложняться);

export { осложняться };