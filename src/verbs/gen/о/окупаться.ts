import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окупаться: PerfectVerb = {
  name: Word('окупаться', 4),
  singular1stPerson: Word('окупаюсь', 4),
  singular2ndPerson: Word('окупаешься', 4),
  singular3rdPerson: Word('окупается', 4),
  plural1stPerson: Word('окупаемся', 4),
  plural2ndPerson: Word('окупаетесь', 4),
  plural3rdPerson: Word('окупаются', 4),
  masculinePast: Word('окупался', 4),
  femininePast: Word('окупалась', 4),
  neuterPast: Word('окупалось', 4),
  pluralPast: Word('окупались', 4),
  imperativeInformal: Word('окупайся', 4),
  imperativeFormal: Word('окупайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(окупаться.name.text, окупаться);

export { окупаться };