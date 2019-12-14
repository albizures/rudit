import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеспечиваться: PerfectVerb = {
  name: Word('обеспечиваться', 5),
  singular1stPerson: Word('обеспечиваюсь', 5),
  singular2ndPerson: Word('обеспечиваешься', 5),
  singular3rdPerson: Word('обеспечивается', 5),
  plural1stPerson: Word('обеспечиваемся', 5),
  plural2ndPerson: Word('обеспечиваетесь', 5),
  plural3rdPerson: Word('обеспечиваются', 5),
  masculinePast: Word('обеспечивался', 5),
  femininePast: Word('обеспечивалась', 5),
  neuterPast: Word('обеспечивалось', 5),
  pluralPast: Word('обеспечивались', 5),
  imperativeInformal: Word('обеспечивайся', 5),
  imperativeFormal: Word('обеспечивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обеспечиваться.name.text, обеспечиваться);

export { обеспечиваться };