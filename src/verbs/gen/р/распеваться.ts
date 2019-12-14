import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распеваться: PerfectVerb = {
  name: Word('распеваться', 6),
  singular1stPerson: Word('распеваюсь', 6),
  singular2ndPerson: Word('распеваешься', 6),
  singular3rdPerson: Word('распевается', 6),
  plural1stPerson: Word('распеваемся', 6),
  plural2ndPerson: Word('распеваетесь', 6),
  plural3rdPerson: Word('распеваются', 6),
  masculinePast: Word('распевался', 6),
  femininePast: Word('распевалась', 6),
  neuterPast: Word('распевалось', 6),
  pluralPast: Word('распевались', 6),
  imperativeInformal: Word('распевайся', 6),
  imperativeFormal: Word('распевайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(распеваться.name.text, распеваться);

export { распеваться };