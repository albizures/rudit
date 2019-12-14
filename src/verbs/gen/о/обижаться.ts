import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обижаться: PerfectVerb = {
  name: Word('обижаться', 4),
  singular1stPerson: Word('обижаюсь', 4),
  singular2ndPerson: Word('обижаешься', 4),
  singular3rdPerson: Word('обижается', 4),
  plural1stPerson: Word('обижаемся', 4),
  plural2ndPerson: Word('обижаетесь', 4),
  plural3rdPerson: Word('обижаются', 4),
  masculinePast: Word('обижался', 4),
  femininePast: Word('обижалась', 4),
  neuterPast: Word('обижалось', 4),
  pluralPast: Word('обижались', 4),
  imperativeInformal: Word('обижайся', 4),
  imperativeFormal: Word('обижайтесь', 4),
  imperfect: ['обидеться'],
};

perfectVerbs.set(обижаться.name.text, обижаться);

export { обижаться };