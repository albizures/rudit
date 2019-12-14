import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брыкаться: PerfectVerb = {
  name: Word('брыкаться', 4),
  singular1stPerson: Word('брыкаюсь', 4),
  singular2ndPerson: Word('брыкаешься', 4),
  singular3rdPerson: Word('брыкается', 4),
  plural1stPerson: Word('брыкаемся', 4),
  plural2ndPerson: Word('брыкаетесь', 4),
  plural3rdPerson: Word('брыкаются', 4),
  masculinePast: Word('брыкался', 4),
  femininePast: Word('брыкалась', 4),
  neuterPast: Word('брыкалось', 4),
  pluralPast: Word('брыкались', 4),
  imperativeInformal: Word('брыкайся', 4),
  imperativeFormal: Word('брыкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(брыкаться.name.text, брыкаться);

export { брыкаться };