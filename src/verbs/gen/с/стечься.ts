import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стечься: PerfectVerb = {
  name: Word('стечься', 2),
  singular1stPerson: Word('стекусь', 4),
  singular2ndPerson: Word('стечёшься', 4),
  singular3rdPerson: Word('стечётся', 4),
  plural1stPerson: Word('стечёмся', 4),
  plural2ndPerson: Word('стечётесь', 4),
  plural3rdPerson: Word('стекутся', 4),
  masculinePast: Word('стёкся', 2),
  femininePast: Word('стеклась', 5),
  neuterPast: Word('стеклось', 5),
  pluralPast: Word('стеклись', 5),
  imperativeInformal: Word('стекись', 4),
  imperativeFormal: Word('стекитесь', 4),
  imperfect: [],
};

perfectVerbs.set(стечься.name.text, стечься);

export { стечься };