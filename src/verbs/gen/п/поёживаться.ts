import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёживаться: PerfectVerb = {
  name: Word('поёживаться', 6),
  singular1stPerson: Word('поёживаюсь', 6),
  singular2ndPerson: Word('поёживаешься', 6),
  singular3rdPerson: Word('поёживается', 6),
  plural1stPerson: Word('поёживаемся', 6),
  plural2ndPerson: Word('поёживаетесь', 6),
  plural3rdPerson: Word('поёживаются', 6),
  masculinePast: Word('поёживался', 6),
  femininePast: Word('поёживалась', 6),
  neuterPast: Word('поёживалось', 6),
  pluralPast: Word('поёживались', 6),
  imperativeInformal: Word('поёживайся', 6),
  imperativeFormal: Word('поёживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поёживаться.name.text, поёживаться);

export { поёживаться };