import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съёживаться: PerfectVerb = {
  name: Word('съёживаться', 2),
  singular1stPerson: Word('съёживаюсь', 2),
  singular2ndPerson: Word('съёживаешься', 2),
  singular3rdPerson: Word('съёживается', 2),
  plural1stPerson: Word('съёживаемся', 2),
  plural2ndPerson: Word('съёживаетесь', 2),
  plural3rdPerson: Word('съёживаются', 2),
  masculinePast: Word('съёживался', 2),
  femininePast: Word('съёживалась', 2),
  neuterPast: Word('съёживалось', 2),
  pluralPast: Word('съёживались', 2),
  imperativeInformal: Word('съёживайся', 2),
  imperativeFormal: Word('съёживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(съёживаться.name.text, съёживаться);

export { съёживаться };