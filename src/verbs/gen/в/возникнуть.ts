import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возникнуть: PerfectVerb = {
  name: Word('возникнуть', 4),
  singular1stPerson: Word('возникну', 4),
  singular2ndPerson: Word('возникнешь', 4),
  singular3rdPerson: Word('возникнет', 4),
  plural1stPerson: Word('возникнем', 4),
  plural2ndPerson: Word('возникнете', 4),
  plural3rdPerson: Word('возникнут', 4),
  masculinePast: Word('возник,возни'кнул', 4),
  femininePast: Word('возникла,возни'кнула', 4),
  neuterPast: Word('возникло,возни'кнуло', 4),
  pluralPast: Word('возникли,возни'кнули', 4),
  imperativeInformal: Word('возникни', 4),
  imperativeFormal: Word('возникните', 4),
  imperfect: ['возникать'],
};

perfectVerbs.set(возникнуть.name.text, возникнуть);

export { возникнуть };