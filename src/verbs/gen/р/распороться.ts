import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распороться: PerfectVerb = {
  name: Word('распороться', 6),
  singular1stPerson: Word('распорюсь', 6),
  singular2ndPerson: Word('распорешься', 4),
  singular3rdPerson: Word('распорется', 4),
  plural1stPerson: Word('распоремся', 4),
  plural2ndPerson: Word('распоретесь', 4),
  plural3rdPerson: Word('распорются', 4),
  masculinePast: Word('распоролся', 6),
  femininePast: Word('распоролась', 6),
  neuterPast: Word('распоролось', 6),
  pluralPast: Word('распоролись', 6),
  imperativeInformal: Word('распорись', 6),
  imperativeFormal: Word('распоритесь', 6),
  imperfect: [],
};

perfectVerbs.set(распороться.name.text, распороться);

export { распороться };