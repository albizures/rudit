import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухудшаться: PerfectVerb = {
  name: Word('ухудшаться', 5),
  singular1stPerson: Word('ухудшаюсь', 5),
  singular2ndPerson: Word('ухудшаешься', 5),
  singular3rdPerson: Word('ухудшается', 5),
  plural1stPerson: Word('ухудшаемся', 5),
  plural2ndPerson: Word('ухудшаетесь', 5),
  plural3rdPerson: Word('ухудшаются', 5),
  masculinePast: Word('ухудшался', 5),
  femininePast: Word('ухудшалась', 5),
  neuterPast: Word('ухудшалось', 5),
  pluralPast: Word('ухудшались', 5),
  imperativeInformal: Word('ухудшайся', 5),
  imperativeFormal: Word('ухудшайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ухудшаться.name.text, ухудшаться);

export { ухудшаться };