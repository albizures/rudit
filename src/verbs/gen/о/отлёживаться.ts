import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлёживаться: PerfectVerb = {
  name: Word('отлёживаться', 3),
  singular1stPerson: Word('отлёживаюсь', 3),
  singular2ndPerson: Word('отлёживаешься', 3),
  singular3rdPerson: Word('отлёживается', 3),
  plural1stPerson: Word('отлёживаемся', 3),
  plural2ndPerson: Word('отлёживаетесь', 3),
  plural3rdPerson: Word('отлёживаются', 3),
  masculinePast: Word('отлёживался', 3),
  femininePast: Word('отлёживалась', 3),
  neuterPast: Word('отлёживалось', 3),
  pluralPast: Word('отлёживались', 3),
  imperativeInformal: Word('отлёживайся', 3),
  imperativeFormal: Word('отлёживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отлёживаться.name.text, отлёживаться);

export { отлёживаться };