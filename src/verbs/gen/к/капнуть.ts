import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const капнуть: PerfectVerb = {
  name: Word('капнуть', 1),
  singular1stPerson: Word('капну', 1),
  singular2ndPerson: Word('капнешь', 1),
  singular3rdPerson: Word('капнет', 1),
  plural1stPerson: Word('капнем', 1),
  plural2ndPerson: Word('капнете', 1),
  plural3rdPerson: Word('капнут', 1),
  masculinePast: Word('кап,ка'пнул', 1),
  femininePast: Word('капла,ка'пнула', 1),
  neuterPast: Word('капло,ка'пнуло', 1),
  pluralPast: Word('капли,ка'пнули', 1),
  imperativeInformal: Word('капни', 1),
  imperativeFormal: Word('капните', 1),
  imperfect: ['капать'],
};

perfectVerbs.set(капнуть.name.text, капнуть);

export { капнуть };