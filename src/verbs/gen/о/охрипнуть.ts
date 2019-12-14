import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охрипнуть: PerfectVerb = {
  name: Word('охрипнуть', 3),
  singular1stPerson: Word('охрипну', 3),
  singular2ndPerson: Word('охрипнешь', 3),
  singular3rdPerson: Word('охрипнет', 3),
  plural1stPerson: Word('охрипнем', 3),
  plural2ndPerson: Word('охрипнете', 3),
  plural3rdPerson: Word('охрипнут', 3),
  masculinePast: Word('охрип', 3),
  femininePast: Word('охрипла', 3),
  neuterPast: Word('охрипло', 3),
  pluralPast: Word('охрипли', 3),
  imperativeInformal: Word('охрипни', 3),
  imperativeFormal: Word('охрипните', 3),
  imperfect: [],
};

perfectVerbs.set(охрипнуть.name.text, охрипнуть);

export { охрипнуть };