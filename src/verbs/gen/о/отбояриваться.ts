import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбояриваться: PerfectVerb = {
  name: Word('отбояриваться', 4),
  singular1stPerson: Word('отбояриваюсь', 4),
  singular2ndPerson: Word('отбояриваешься', 4),
  singular3rdPerson: Word('отбояривается', 4),
  plural1stPerson: Word('отбояриваемся', 4),
  plural2ndPerson: Word('отбояриваетесь', 4),
  plural3rdPerson: Word('отбояриваются', 4),
  masculinePast: Word('отбояривался', 4),
  femininePast: Word('отбояривалась', 4),
  neuterPast: Word('отбояривалось', 4),
  pluralPast: Word('отбояривались', 4),
  imperativeInformal: Word('отбояривайся', 4),
  imperativeFormal: Word('отбояривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отбояриваться.name.text, отбояриваться);

export { отбояриваться };