import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уживаться: PerfectVerb = {
  name: Word('уживаться', 4),
  singular1stPerson: Word('уживаюсь', 4),
  singular2ndPerson: Word('уживаешься', 4),
  singular3rdPerson: Word('уживается', 4),
  plural1stPerson: Word('уживаемся', 4),
  plural2ndPerson: Word('уживаетесь', 4),
  plural3rdPerson: Word('уживаются', 4),
  masculinePast: Word('уживался', 4),
  femininePast: Word('уживалась', 4),
  neuterPast: Word('уживалось', 4),
  pluralPast: Word('уживались', 4),
  imperativeInformal: Word('уживайся', 4),
  imperativeFormal: Word('уживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(уживаться.name.text, уживаться);

export { уживаться };