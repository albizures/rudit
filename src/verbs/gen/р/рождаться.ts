import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рождаться: PerfectVerb = {
  name: Word('рождаться', 4),
  singular1stPerson: Word('рождаюсь', 4),
  singular2ndPerson: Word('рождаешься', 4),
  singular3rdPerson: Word('рождается', 4),
  plural1stPerson: Word('рождаемся', 4),
  plural2ndPerson: Word('рождаетесь', 4),
  plural3rdPerson: Word('рождаются', 4),
  masculinePast: Word('рождался', 4),
  femininePast: Word('рождалась', 4),
  neuterPast: Word('рождалось', 4),
  pluralPast: Word('рождались', 4),
  imperativeInformal: Word('рождайся', 4),
  imperativeFormal: Word('рождайтесь', 4),
  imperfect: ['родиться'],
};

perfectVerbs.set(рождаться.name.text, рождаться);

export { рождаться };