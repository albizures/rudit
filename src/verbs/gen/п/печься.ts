import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печься: PerfectVerb = {
  name: Word('печься', 1),
  singular1stPerson: Word('пекусь', 3),
  singular2ndPerson: Word('печёшься', 1),
  singular3rdPerson: Word('печётся', 1),
  plural1stPerson: Word('печёмся', 1),
  plural2ndPerson: Word('печётесь', 1),
  plural3rdPerson: Word('пекутся', 3),
  masculinePast: Word('пёкся', 4),
  femininePast: Word('пеклась', 4),
  neuterPast: Word('пеклось', 4),
  pluralPast: Word('пеклись', 4),
  imperativeInformal: Word('пекись', 3),
  imperativeFormal: Word('пекитесь', 3),
  imperfect: [],
};

perfectVerbs.set(печься.name.text, печься);

export { печься };