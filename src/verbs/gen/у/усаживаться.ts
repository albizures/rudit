import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усаживаться: PerfectVerb = {
  name: Word('усаживаться', 2),
  singular1stPerson: Word('усаживаюсь', 2),
  singular2ndPerson: Word('усаживаешься', 2),
  singular3rdPerson: Word('усаживается', 2),
  plural1stPerson: Word('усаживаемся', 2),
  plural2ndPerson: Word('усаживаетесь', 2),
  plural3rdPerson: Word('усаживаются', 2),
  masculinePast: Word('усаживался', 2),
  femininePast: Word('усаживалась', 2),
  neuterPast: Word('усаживалось', 2),
  pluralPast: Word('усаживались', 2),
  imperativeInformal: Word('усаживайся', 2),
  imperativeFormal: Word('усаживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(усаживаться.name.text, усаживаться);

export { усаживаться };