import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёживаться: PerfectVerb = {
  name: Word('поёживаться', 2),
  singular1stPerson: Word('поёживаюсь', 2),
  singular2ndPerson: Word('поёживаешься', 2),
  singular3rdPerson: Word('поёживается', 2),
  plural1stPerson: Word('поёживаемся', 2),
  plural2ndPerson: Word('поёживаетесь', 2),
  plural3rdPerson: Word('поёживаются', 2),
  masculinePast: Word('поёживался', 2),
  femininePast: Word('поёживалась', 2),
  neuterPast: Word('поёживалось', 2),
  pluralPast: Word('поёживались', 2),
  imperativeInformal: Word('поёживайся', 2),
  imperativeFormal: Word('поёживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(поёживаться.name.text, поёживаться);

export { поёживаться };