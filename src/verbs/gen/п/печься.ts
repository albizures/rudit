import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печься: PerfectVerb = {
  name: Word('печься', 1),
  singular1stPerson: Word('пекусь', 3),
  singular2ndPerson: Word('печёшься', 3),
  singular3rdPerson: Word('печётся', 3),
  plural1stPerson: Word('печёмся', 3),
  plural2ndPerson: Word('печётесь', 3),
  plural3rdPerson: Word('пекутся', 3),
  masculinePast: Word('пёкся', 1),
  femininePast: Word('пеклась', 4),
  neuterPast: Word('пеклось', 4),
  pluralPast: Word('пеклись', 4),
  imperativeInformal: Word('пекись', 3),
  imperativeFormal: Word('пекитесь', 3),
  imperfect: [],
};

perfectVerbs.set(печься.name.text, печься);

export { печься };