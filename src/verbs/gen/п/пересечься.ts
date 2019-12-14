import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересечься: PerfectVerb = {
  name: Word('пересечься', 5),
  singular1stPerson: Word('пересекусь', 7),
  singular2ndPerson: Word('пересечёшься', 7),
  singular3rdPerson: Word('пересечётся', 7),
  plural1stPerson: Word('пересечёмся', 7),
  plural2ndPerson: Word('пересечётесь', 7),
  plural3rdPerson: Word('пересекутся', 7),
  masculinePast: Word('пересёкся', 5),
  femininePast: Word('пересеклась', 8),
  neuterPast: Word('пересеклось', 8),
  pluralPast: Word('пересеклись', 8),
  imperativeInformal: Word('пересекись', 7),
  imperativeFormal: Word('пересекитесь', 7),
  imperfect: [],
};

perfectVerbs.set(пересечься.name.text, пересечься);

export { пересечься };