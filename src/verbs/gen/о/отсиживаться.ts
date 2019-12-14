import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсиживаться: PerfectVerb = {
  name: Word('отсиживаться', 3),
  singular1stPerson: Word('отсиживаюсь', 3),
  singular2ndPerson: Word('отсиживаешься', 3),
  singular3rdPerson: Word('отсиживается', 3),
  plural1stPerson: Word('отсиживаемся', 3),
  plural2ndPerson: Word('отсиживаетесь', 3),
  plural3rdPerson: Word('отсиживаются', 3),
  masculinePast: Word('отсиживался', 3),
  femininePast: Word('отсиживалась', 3),
  neuterPast: Word('отсиживалось', 3),
  pluralPast: Word('отсиживались', 3),
  imperativeInformal: Word('отсиживайся', 3),
  imperativeFormal: Word('отсиживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отсиживаться.name.text, отсиживаться);

export { отсиживаться };