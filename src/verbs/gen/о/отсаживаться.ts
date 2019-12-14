import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсаживаться: PerfectVerb = {
  name: Word('отсаживаться', 3),
  singular1stPerson: Word('отсаживаюсь', 3),
  singular2ndPerson: Word('отсаживаешься', 3),
  singular3rdPerson: Word('отсаживается', 3),
  plural1stPerson: Word('отсаживаемся', 3),
  plural2ndPerson: Word('отсаживаетесь', 3),
  plural3rdPerson: Word('отсаживаются', 3),
  masculinePast: Word('отсаживался', 3),
  femininePast: Word('отсаживалась', 3),
  neuterPast: Word('отсаживалось', 3),
  pluralPast: Word('отсаживались', 3),
  imperativeInformal: Word('отсаживайся', 3),
  imperativeFormal: Word('отсаживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отсаживаться.name.text, отсаживаться);

export { отсаживаться };