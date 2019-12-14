import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдерживаться: PerfectVerb = {
  name: Word('выдерживаться', 3),
  singular1stPerson: Word('выдерживаюсь', 3),
  singular2ndPerson: Word('выдерживаешься', 3),
  singular3rdPerson: Word('выдерживается', 3),
  plural1stPerson: Word('выдерживаемся', 3),
  plural2ndPerson: Word('выдерживаетесь', 3),
  plural3rdPerson: Word('выдерживаются', 3),
  masculinePast: Word('выдерживался', 3),
  femininePast: Word('выдерживалась', 3),
  neuterPast: Word('выдерживалось', 3),
  pluralPast: Word('выдерживались', 3),
  imperativeInformal: Word('выдерживайся', 3),
  imperativeFormal: Word('выдерживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выдерживаться.name.text, выдерживаться);

export { выдерживаться };