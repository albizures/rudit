import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присвистнуть: PerfectVerb = {
  name: Word('присвистнуть', 5),
  singular1stPerson: Word('присвистну', 5),
  singular2ndPerson: Word('присвистнешь', 5),
  singular3rdPerson: Word('присвистнет', 5),
  plural1stPerson: Word('присвистнем', 5),
  plural2ndPerson: Word('присвистнете', 5),
  plural3rdPerson: Word('присвистнут', 5),
  masculinePast: Word('присвистнул', 5),
  femininePast: Word('присвистнула', 5),
  neuterPast: Word('присвистнуло', 5),
  pluralPast: Word('присвистнули', 5),
  imperativeInformal: Word('присвистни', 5),
  imperativeFormal: Word('присвистните', 5),
  imperfect: [],
};

perfectVerbs.set(присвистнуть.name.text, присвистнуть);

export { присвистнуть };