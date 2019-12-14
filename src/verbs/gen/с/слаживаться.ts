import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слаживаться: PerfectVerb = {
  name: Word('слаживаться', 2),
  singular1stPerson: Word('слаживаюсь', 2),
  singular2ndPerson: Word('слаживаешься', 2),
  singular3rdPerson: Word('слаживается', 2),
  plural1stPerson: Word('слаживаемся', 2),
  plural2ndPerson: Word('слаживаетесь', 2),
  plural3rdPerson: Word('слаживаются', 2),
  masculinePast: Word('слаживался', 2),
  femininePast: Word('слаживалась', 2),
  neuterPast: Word('слаживалось', 2),
  pluralPast: Word('слаживались', 2),
  imperativeInformal: Word('слаживайся', 2),
  imperativeFormal: Word('слаживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(слаживаться.name.text, слаживаться);

export { слаживаться };