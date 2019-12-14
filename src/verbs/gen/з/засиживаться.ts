import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засиживаться: PerfectVerb = {
  name: Word('засиживаться', 3),
  singular1stPerson: Word('засиживаюсь', 3),
  singular2ndPerson: Word('засиживаешься', 3),
  singular3rdPerson: Word('засиживается', 3),
  plural1stPerson: Word('засиживаемся', 3),
  plural2ndPerson: Word('засиживаетесь', 3),
  plural3rdPerson: Word('засиживаются', 3),
  masculinePast: Word('засиживался', 3),
  femininePast: Word('засиживалась', 3),
  neuterPast: Word('засиживалось', 3),
  pluralPast: Word('засиживались', 3),
  imperativeInformal: Word('засиживайся', 3),
  imperativeFormal: Word('засиживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(засиживаться.name.text, засиживаться);

export { засиживаться };