import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлёживаться: PerfectVerb = {
  name: Word('отлёживаться', 7),
  singular1stPerson: Word('отлёживаюсь', 7),
  singular2ndPerson: Word('отлёживаешься', 7),
  singular3rdPerson: Word('отлёживается', 7),
  plural1stPerson: Word('отлёживаемся', 7),
  plural2ndPerson: Word('отлёживаетесь', 7),
  plural3rdPerson: Word('отлёживаются', 7),
  masculinePast: Word('отлёживался', 7),
  femininePast: Word('отлёживалась', 7),
  neuterPast: Word('отлёживалось', 7),
  pluralPast: Word('отлёживались', 7),
  imperativeInformal: Word('отлёживайся', 7),
  imperativeFormal: Word('отлёживайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(отлёживаться.name.text, отлёживаться);

export { отлёживаться };