import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окопаться: PerfectVerb = {
  name: Word('окопаться', 4),
  singular1stPerson: Word('окопаюсь', 4),
  singular2ndPerson: Word('окопаешься', 4),
  singular3rdPerson: Word('окопается', 4),
  plural1stPerson: Word('окопаемся', 4),
  plural2ndPerson: Word('окопаетесь', 4),
  plural3rdPerson: Word('окопаются', 4),
  masculinePast: Word('окопался', 4),
  femininePast: Word('окопалась', 4),
  neuterPast: Word('окопалось', 4),
  pluralPast: Word('окопались', 4),
  imperativeInformal: Word('окопайся', 4),
  imperativeFormal: Word('окопайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(окопаться.name.text, окопаться);

export { окопаться };