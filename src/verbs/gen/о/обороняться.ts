import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обороняться: PerfectVerb = {
  name: Word('обороняться', 6),
  singular1stPerson: Word('обороняюсь', 6),
  singular2ndPerson: Word('обороняешься', 6),
  singular3rdPerson: Word('обороняется', 6),
  plural1stPerson: Word('обороняемся', 6),
  plural2ndPerson: Word('обороняетесь', 6),
  plural3rdPerson: Word('обороняются', 6),
  masculinePast: Word('оборонялся', 6),
  femininePast: Word('оборонялась', 6),
  neuterPast: Word('оборонялось', 6),
  pluralPast: Word('оборонялись', 6),
  imperativeInformal: Word('обороняйся', 6),
  imperativeFormal: Word('обороняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обороняться.name.text, обороняться);

export { обороняться };