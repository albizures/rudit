import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окунаться: PerfectVerb = {
  name: Word('окунаться', 4),
  singular1stPerson: Word('окунаюсь', 4),
  singular2ndPerson: Word('окунаешься', 4),
  singular3rdPerson: Word('окунается', 4),
  plural1stPerson: Word('окунаемся', 4),
  plural2ndPerson: Word('окунаетесь', 4),
  plural3rdPerson: Word('окунаются', 4),
  masculinePast: Word('окунался', 4),
  femininePast: Word('окуналась', 4),
  neuterPast: Word('окуналось', 4),
  pluralPast: Word('окунались', 4),
  imperativeInformal: Word('окунайся', 4),
  imperativeFormal: Word('окунайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(окунаться.name.text, окунаться);

export { окунаться };