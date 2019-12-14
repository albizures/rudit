import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толочься: PerfectVerb = {
  name: Word('толочься', 3),
  singular1stPerson: Word('толкусь', 4),
  singular2ndPerson: Word('толчёшься', 4),
  singular3rdPerson: Word('толчётся', 4),
  plural1stPerson: Word('толчёмся', 4),
  plural2ndPerson: Word('толчётесь', 4),
  plural3rdPerson: Word('толкутся', 4),
  masculinePast: Word('толокся', 3),
  femininePast: Word('толклась', 5),
  neuterPast: Word('толклось', 5),
  pluralPast: Word('толклись', 5),
  imperativeInformal: Word('толкись', 4),
  imperativeFormal: Word('толкитесь', 4),
  imperfect: [],
};

perfectVerbs.set(толочься.name.text, толочься);

export { толочься };