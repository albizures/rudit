import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересаживаться: PerfectVerb = {
  name: Word('пересаживаться', 5),
  singular1stPerson: Word('пересаживаюсь', 5),
  singular2ndPerson: Word('пересаживаешься', 5),
  singular3rdPerson: Word('пересаживается', 5),
  plural1stPerson: Word('пересаживаемся', 5),
  plural2ndPerson: Word('пересаживаетесь', 5),
  plural3rdPerson: Word('пересаживаются', 5),
  masculinePast: Word('пересаживался', 5),
  femininePast: Word('пересаживалась', 5),
  neuterPast: Word('пересаживалось', 5),
  pluralPast: Word('пересаживались', 5),
  imperativeInformal: Word('пересаживайся', 5),
  imperativeFormal: Word('пересаживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пересаживаться.name.text, пересаживаться);

export { пересаживаться };