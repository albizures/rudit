import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утыкаться: PerfectVerb = {
  name: Word('утыкаться', 4),
  singular1stPerson: Word('утыкаюсь', 4),
  singular2ndPerson: Word('утыкаешься', 4),
  singular3rdPerson: Word('утыкается', 4),
  plural1stPerson: Word('утыкаемся', 4),
  plural2ndPerson: Word('утыкаетесь', 4),
  plural3rdPerson: Word('утыкаются', 4),
  masculinePast: Word('утыкался', 4),
  femininePast: Word('утыкалась', 4),
  neuterPast: Word('утыкалось', 4),
  pluralPast: Word('утыкались', 4),
  imperativeInformal: Word('утыкайся', 4),
  imperativeFormal: Word('утыкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(утыкаться.name.text, утыкаться);

export { утыкаться };