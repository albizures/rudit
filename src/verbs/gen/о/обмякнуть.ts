import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмякнуть: PerfectVerb = {
  name: Word('обмякнуть', 3),
  singular1stPerson: Word('обмякну', 3),
  singular2ndPerson: Word('обмякнешь', 3),
  singular3rdPerson: Word('обмякнет', 3),
  plural1stPerson: Word('обмякнем', 3),
  plural2ndPerson: Word('обмякнете', 3),
  plural3rdPerson: Word('обмякнут', 3),
  masculinePast: Word('обмяк', 3),
  femininePast: Word('обмякла', 3),
  neuterPast: Word('обмякло', 3),
  pluralPast: Word('обмякли', 3),
  imperativeInformal: Word('обмякни', 3),
  imperativeFormal: Word('обмякните', 3),
  imperfect: [],
};

perfectVerbs.set(обмякнуть.name.text, обмякнуть);

export { обмякнуть };