import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натыкаться: PerfectVerb = {
  name: Word('натыкаться', 5),
  singular1stPerson: Word('натыкаюсь', 5),
  singular2ndPerson: Word('натыкаешься', 5),
  singular3rdPerson: Word('натыкается', 5),
  plural1stPerson: Word('натыкаемся', 5),
  plural2ndPerson: Word('натыкаетесь', 5),
  plural3rdPerson: Word('натыкаются', 5),
  masculinePast: Word('натыкался', 5),
  femininePast: Word('натыкалась', 5),
  neuterPast: Word('натыкалось', 5),
  pluralPast: Word('натыкались', 5),
  imperativeInformal: Word('натыкайся', 5),
  imperativeFormal: Word('натыкайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(натыкаться.name.text, натыкаться);

export { натыкаться };