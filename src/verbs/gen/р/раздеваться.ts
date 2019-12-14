import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздеваться: PerfectVerb = {
  name: Word('раздеваться', 6),
  singular1stPerson: Word('раздеваюсь', 6),
  singular2ndPerson: Word('раздеваешься', 6),
  singular3rdPerson: Word('раздевается', 6),
  plural1stPerson: Word('раздеваемся', 6),
  plural2ndPerson: Word('раздеваетесь', 6),
  plural3rdPerson: Word('раздеваются', 6),
  masculinePast: Word('раздевался', 6),
  femininePast: Word('раздевалась', 6),
  neuterPast: Word('раздевалось', 6),
  pluralPast: Word('раздевались', 6),
  imperativeInformal: Word('раздевайся', 6),
  imperativeFormal: Word('раздевайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раздеваться.name.text, раздеваться);

export { раздеваться };