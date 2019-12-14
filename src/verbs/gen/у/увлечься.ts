import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлечься: PerfectVerb = {
  name: Word('увлечься', 3),
  singular1stPerson: Word('увлекусь', 5),
  singular2ndPerson: Word('увлечёшься', 3),
  singular3rdPerson: Word('увлечётся', 3),
  plural1stPerson: Word('увлечёмся', 3),
  plural2ndPerson: Word('увлечётесь', 3),
  plural3rdPerson: Word('увлекутся', 5),
  masculinePast: Word('увлёкся', 6),
  femininePast: Word('увлеклась', 6),
  neuterPast: Word('увлеклось', 6),
  pluralPast: Word('увлеклись', 6),
  imperativeInformal: Word('увлекись', 5),
  imperativeFormal: Word('увлекитесь', 5),
  imperfect: ['увлекаться'],
};

perfectVerbs.set(увлечься.name.text, увлечься);

export { увлечься };