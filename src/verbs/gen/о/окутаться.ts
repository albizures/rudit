import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окутаться: PerfectVerb = {
  name: Word('окутаться', 2),
  singular1stPerson: Word('окутаюсь', 2),
  singular2ndPerson: Word('окутаешься', 2),
  singular3rdPerson: Word('окутается', 2),
  plural1stPerson: Word('окутаемся', 2),
  plural2ndPerson: Word('окутаетесь', 2),
  plural3rdPerson: Word('окутаются', 2),
  masculinePast: Word('окутался', 2),
  femininePast: Word('окуталась', 2),
  neuterPast: Word('окуталось', 2),
  pluralPast: Word('окутались', 2),
  imperativeInformal: Word('окутайся', 2),
  imperativeFormal: Word('окутайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окутаться.name.text, окутаться);

export { окутаться };