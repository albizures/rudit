import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const створаживаться: PerfectVerb = {
  name: Word('створаживаться', 5),
  singular1stPerson: Word('створаживаюсь', 5),
  singular2ndPerson: Word('створаживаешься', 5),
  singular3rdPerson: Word('створаживается', 5),
  plural1stPerson: Word('створаживаемся', 5),
  plural2ndPerson: Word('створаживаетесь', 5),
  plural3rdPerson: Word('створаживаются', 5),
  masculinePast: Word('створаживался', 5),
  femininePast: Word('створаживалась', 5),
  neuterPast: Word('створаживалось', 5),
  pluralPast: Word('створаживались', 5),
  imperativeInformal: Word('створаживайся', 5),
  imperativeFormal: Word('створаживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(створаживаться.name.text, створаживаться);

export { створаживаться };