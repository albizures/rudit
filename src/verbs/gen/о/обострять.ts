import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обострять: PerfectVerb = {
  name: Word('обострять', 6),
  singular1stPerson: Word('обостряю', 6),
  singular2ndPerson: Word('обостряешь', 6),
  singular3rdPerson: Word('обостряет', 6),
  plural1stPerson: Word('обостряем', 6),
  plural2ndPerson: Word('обостряете', 6),
  plural3rdPerson: Word('обостряют', 6),
  masculinePast: Word('обострял', 6),
  femininePast: Word('обостряла', 6),
  neuterPast: Word('обостряло', 6),
  pluralPast: Word('обостряли', 6),
  imperativeInformal: Word('обостряй', 6),
  imperativeFormal: Word('обостряйте', 6),
  imperfect: [],
};

perfectVerbs.set(обострять.name.text, обострять);

export { обострять };