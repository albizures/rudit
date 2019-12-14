import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издохнуть: PerfectVerb = {
  name: Word('издохнуть', 3),
  singular1stPerson: Word('издохну', 3),
  singular2ndPerson: Word('издохнешь', 3),
  singular3rdPerson: Word('издохнет', 3),
  plural1stPerson: Word('издохнем', 3),
  plural2ndPerson: Word('издохнете', 3),
  plural3rdPerson: Word('издохнут', 3),
  masculinePast: Word('издох', 3),
  femininePast: Word('издохла', 3),
  neuterPast: Word('издохло', 3),
  pluralPast: Word('издохли', 3),
  imperativeInformal: Word('издохни', 3),
  imperativeFormal: Word('издохните', 3),
  imperfect: [],
};

perfectVerbs.set(издохнуть.name.text, издохнуть);

export { издохнуть };