import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересечься: PerfectVerb = {
  name: Word('пересечься', 5),
  singular1stPerson: Word('пересекусь', 7),
  singular2ndPerson: Word('пересечёшься', 1),
  singular3rdPerson: Word('пересечётся', 1),
  plural1stPerson: Word('пересечёмся', 1),
  plural2ndPerson: Word('пересечётесь', 1),
  plural3rdPerson: Word('пересекутся', 7),
  masculinePast: Word('пересёкся', 1),
  femininePast: Word('пересеклась', 8),
  neuterPast: Word('пересеклось', 8),
  pluralPast: Word('пересеклись', 8),
  imperativeInformal: Word('пересекись', 7),
  imperativeFormal: Word('пересекитесь', 7),
  imperfect: [],
};

perfectVerbs.set(пересечься.name.text, пересечься);

export { пересечься };