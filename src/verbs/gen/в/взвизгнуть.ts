import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвизгнуть: PerfectVerb = {
  name: Word('взвизгнуть', 3),
  singular1stPerson: Word('взвизгну', 3),
  singular2ndPerson: Word('взвизгнешь', 3),
  singular3rdPerson: Word('взвизгнет', 3),
  plural1stPerson: Word('взвизгнем', 3),
  plural2ndPerson: Word('взвизгнете', 3),
  plural3rdPerson: Word('взвизгнут', 3),
  masculinePast: Word('взвизгнул', 3),
  femininePast: Word('взвизгнула', 3),
  neuterPast: Word('взвизгнуло', 3),
  pluralPast: Word('взвизгнули', 3),
  imperativeInformal: Word('взвизгни', 3),
  imperativeFormal: Word('взвизгните', 3),
  imperfect: [],
};

perfectVerbs.set(взвизгнуть.name.text, взвизгнуть);

export { взвизгнуть };