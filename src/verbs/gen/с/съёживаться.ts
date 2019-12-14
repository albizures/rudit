import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съёживаться: PerfectVerb = {
  name: Word('съёживаться', 6),
  singular1stPerson: Word('съёживаюсь', 6),
  singular2ndPerson: Word('съёживаешься', 6),
  singular3rdPerson: Word('съёживается', 6),
  plural1stPerson: Word('съёживаемся', 6),
  plural2ndPerson: Word('съёживаетесь', 6),
  plural3rdPerson: Word('съёживаются', 6),
  masculinePast: Word('съёживался', 6),
  femininePast: Word('съёживалась', 6),
  neuterPast: Word('съёживалось', 6),
  pluralPast: Word('съёживались', 6),
  imperativeInformal: Word('съёживайся', 6),
  imperativeFormal: Word('съёживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(съёживаться.name.text, съёживаться);

export { съёживаться };