import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улаживаться: PerfectVerb = {
  name: Word('улаживаться', 2),
  singular1stPerson: Word('улаживаюсь', 2),
  singular2ndPerson: Word('улаживаешься', 2),
  singular3rdPerson: Word('улаживается', 2),
  plural1stPerson: Word('улаживаемся', 2),
  plural2ndPerson: Word('улаживаетесь', 2),
  plural3rdPerson: Word('улаживаются', 2),
  masculinePast: Word('улаживался', 2),
  femininePast: Word('улаживалась', 2),
  neuterPast: Word('улаживалось', 2),
  pluralPast: Word('улаживались', 2),
  imperativeInformal: Word('улаживайся', 2),
  imperativeFormal: Word('улаживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(улаживаться.name.text, улаживаться);

export { улаживаться };