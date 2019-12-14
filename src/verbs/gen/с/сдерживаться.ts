import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдерживаться: PerfectVerb = {
  name: Word('сдерживаться', 2),
  singular1stPerson: Word('сдерживаюсь', 2),
  singular2ndPerson: Word('сдерживаешься', 2),
  singular3rdPerson: Word('сдерживается', 2),
  plural1stPerson: Word('сдерживаемся', 2),
  plural2ndPerson: Word('сдерживаетесь', 2),
  plural3rdPerson: Word('сдерживаются', 2),
  masculinePast: Word('сдерживался', 2),
  femininePast: Word('сдерживалась', 2),
  neuterPast: Word('сдерживалось', 2),
  pluralPast: Word('сдерживались', 2),
  imperativeInformal: Word('сдерживайся', 2),
  imperativeFormal: Word('сдерживайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(сдерживаться.name.text, сдерживаться);

export { сдерживаться };