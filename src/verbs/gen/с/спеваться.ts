import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спеваться: PerfectVerb = {
  name: Word('спеваться', 4),
  singular1stPerson: Word('спеваюсь', 4),
  singular2ndPerson: Word('спеваешься', 4),
  singular3rdPerson: Word('спевается', 4),
  plural1stPerson: Word('спеваемся', 4),
  plural2ndPerson: Word('спеваетесь', 4),
  plural3rdPerson: Word('спеваются', 4),
  masculinePast: Word('спевался', 4),
  femininePast: Word('спевалась', 4),
  neuterPast: Word('спевалось', 4),
  pluralPast: Word('спевались', 4),
  imperativeInformal: Word('спевайся', 4),
  imperativeFormal: Word('спевайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(спеваться.name.text, спеваться);

export { спеваться };