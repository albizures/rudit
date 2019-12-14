import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгораживаться: PerfectVerb = {
  name: Word('отгораживаться', 5),
  singular1stPerson: Word('отгораживаюсь', 5),
  singular2ndPerson: Word('отгораживаешься', 5),
  singular3rdPerson: Word('отгораживается', 5),
  plural1stPerson: Word('отгораживаемся', 5),
  plural2ndPerson: Word('отгораживаетесь', 5),
  plural3rdPerson: Word('отгораживаются', 5),
  masculinePast: Word('отгораживался', 5),
  femininePast: Word('отгораживалась', 5),
  neuterPast: Word('отгораживалось', 5),
  pluralPast: Word('отгораживались', 5),
  imperativeInformal: Word('отгораживайся', 5),
  imperativeFormal: Word('отгораживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отгораживаться.name.text, отгораживаться);

export { отгораживаться };