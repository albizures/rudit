import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испечься: PerfectVerb = {
  name: Word('испечься', 3),
  singular1stPerson: Word('испекусь', 5),
  singular2ndPerson: Word('испечёшься', 3),
  singular3rdPerson: Word('испечётся', 3),
  plural1stPerson: Word('испечёмся', 3),
  plural2ndPerson: Word('испечётесь', 3),
  plural3rdPerson: Word('испекутся', 5),
  masculinePast: Word('испёкся', 0),
  femininePast: Word('испеклась', 6),
  neuterPast: Word('испеклось', 6),
  pluralPast: Word('испеклись', 6),
  imperativeInformal: Word('испекись', 5),
  imperativeFormal: Word('испекитесь', 5),
  imperfect: [],
};

perfectVerbs.set(испечься.name.text, испечься);

export { испечься };