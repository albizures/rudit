import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срастись: PerfectVerb = {
  name: Word('срастись', 5),
  singular1stPerson: Word('срастусь', 5),
  singular2ndPerson: Word('срастёшься', 5),
  singular3rdPerson: Word('срастётся', 5),
  plural1stPerson: Word('срастёмся', 5),
  plural2ndPerson: Word('срастётесь', 5),
  plural3rdPerson: Word('срастутся', 5),
  masculinePast: Word('сросся', 2),
  femininePast: Word('срослась', 5),
  neuterPast: Word('срослось', 5),
  pluralPast: Word('срослись', 5),
  imperativeInformal: Word('срастись', 5),
  imperativeFormal: Word('сраститесь', 5),
  imperfect: [],
};

perfectVerbs.set(срастись.name.text, срастись);

export { срастись };