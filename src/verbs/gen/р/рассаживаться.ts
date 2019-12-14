import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассаживаться: PerfectVerb = {
  name: Word('рассаживаться', 4),
  singular1stPerson: Word('рассаживаюсь', 4),
  singular2ndPerson: Word('рассаживаешься', 4),
  singular3rdPerson: Word('рассаживается', 4),
  plural1stPerson: Word('рассаживаемся', 4),
  plural2ndPerson: Word('рассаживаетесь', 4),
  plural3rdPerson: Word('рассаживаются', 4),
  masculinePast: Word('рассаживался', 4),
  femininePast: Word('рассаживалась', 4),
  neuterPast: Word('рассаживалось', 4),
  pluralPast: Word('рассаживались', 4),
  imperativeInformal: Word('рассаживайся', 4),
  imperativeFormal: Word('рассаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассаживаться.name.text, рассаживаться);

export { рассаживаться };