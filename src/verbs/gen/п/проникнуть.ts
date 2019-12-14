import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проникнуть: PerfectVerb = {
  name: Word('проникнуть', 4),
  singular1stPerson: Word('проникну', 4),
  singular2ndPerson: Word('проникнешь', 4),
  singular3rdPerson: Word('проникнет', 4),
  plural1stPerson: Word('проникнем', 4),
  plural2ndPerson: Word('проникнете', 4),
  plural3rdPerson: Word('проникнут', 4),
  masculinePast: Word('проник,прони'кнул', 4),
  femininePast: Word('проникла,прони'кнула', 4),
  neuterPast: Word('проникло,прони'кнуло', 4),
  pluralPast: Word('проникли,прони'кнули', 4),
  imperativeInformal: Word('проникни', 4),
  imperativeFormal: Word('проникните', 4),
  imperfect: ['проникать'],
};

perfectVerbs.set(проникнуть.name.text, проникнуть);

export { проникнуть };