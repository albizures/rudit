import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снижаться: PerfectVerb = {
  name: Word('снижаться', 4),
  singular1stPerson: Word('снижаюсь', 4),
  singular2ndPerson: Word('снижаешься', 4),
  singular3rdPerson: Word('снижается', 4),
  plural1stPerson: Word('снижаемся', 4),
  plural2ndPerson: Word('снижаетесь', 4),
  plural3rdPerson: Word('снижаются', 4),
  masculinePast: Word('снижался', 4),
  femininePast: Word('снижалась', 4),
  neuterPast: Word('снижалось', 4),
  pluralPast: Word('снижались', 4),
  imperativeInformal: Word('снижайся', 4),
  imperativeFormal: Word('снижайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(снижаться.name.text, снижаться);

export { снижаться };