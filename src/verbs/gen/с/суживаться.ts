import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суживаться: PerfectVerb = {
  name: Word('суживаться', 1),
  singular1stPerson: Word('суживаюсь', 1),
  singular2ndPerson: Word('суживаешься', 1),
  singular3rdPerson: Word('суживается', 1),
  plural1stPerson: Word('суживаемся', 1),
  plural2ndPerson: Word('суживаетесь', 1),
  plural3rdPerson: Word('суживаются', 1),
  masculinePast: Word('суживался', 1),
  femininePast: Word('суживалась', 1),
  neuterPast: Word('суживалось', 1),
  pluralPast: Word('суживались', 1),
  imperativeInformal: Word('суживайся', 1),
  imperativeFormal: Word('суживайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(суживаться.name.text, суживаться);

export { суживаться };