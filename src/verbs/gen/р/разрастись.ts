import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрастись: PerfectVerb = {
  name: Word('разрастись', 7),
  singular1stPerson: Word('разрастусь', 7),
  singular2ndPerson: Word('разрастёшься', 1),
  singular3rdPerson: Word('разрастётся', 1),
  plural1stPerson: Word('разрастёмся', 1),
  plural2ndPerson: Word('разрастётесь', 1),
  plural3rdPerson: Word('разрастутся', 7),
  masculinePast: Word('разросся', 4),
  femininePast: Word('разрослась', 7),
  neuterPast: Word('разрослось', 7),
  pluralPast: Word('разрослись', 7),
  imperativeInformal: Word('разрастись', 7),
  imperativeFormal: Word('разраститесь', 7),
  imperfect: [],
};

perfectVerbs.set(разрастись.name.text, разрастись);

export { разрастись };