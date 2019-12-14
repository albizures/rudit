import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настораживаться: PerfectVerb = {
  name: Word('настораживаться', 6),
  singular1stPerson: Word('настораживаюсь', 6),
  singular2ndPerson: Word('настораживаешься', 6),
  singular3rdPerson: Word('настораживается', 6),
  plural1stPerson: Word('настораживаемся', 6),
  plural2ndPerson: Word('настораживаетесь', 6),
  plural3rdPerson: Word('настораживаются', 6),
  masculinePast: Word('настораживался', 6),
  femininePast: Word('настораживалась', 6),
  neuterPast: Word('настораживалось', 6),
  pluralPast: Word('настораживались', 6),
  imperativeInformal: Word('настораживайся', 6),
  imperativeFormal: Word('настораживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(настораживаться.name.text, настораживаться);

export { настораживаться };