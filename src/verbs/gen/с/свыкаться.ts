import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свыкаться: PerfectVerb = {
  name: Word('свыкаться', 4),
  singular1stPerson: Word('свыкаюсь', 4),
  singular2ndPerson: Word('свыкаешься', 4),
  singular3rdPerson: Word('свыкается', 4),
  plural1stPerson: Word('свыкаемся', 4),
  plural2ndPerson: Word('свыкаетесь', 4),
  plural3rdPerson: Word('свыкаются', 4),
  masculinePast: Word('свыкался', 4),
  femininePast: Word('свыкалась', 4),
  neuterPast: Word('свыкалось', 4),
  pluralPast: Word('свыкались', 4),
  imperativeInformal: Word('свыкайся', 4),
  imperativeFormal: Word('свыкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(свыкаться.name.text, свыкаться);

export { свыкаться };