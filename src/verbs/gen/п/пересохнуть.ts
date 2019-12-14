import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересохнуть: PerfectVerb = {
  name: Word('пересохнуть', 5),
  singular1stPerson: Word('пересохну', 5),
  singular2ndPerson: Word('пересохнешь', 5),
  singular3rdPerson: Word('пересохнет', 5),
  plural1stPerson: Word('пересохнем', 5),
  plural2ndPerson: Word('пересохнете', 5),
  plural3rdPerson: Word('пересохнут', 5),
  masculinePast: Word('пересох', 5),
  femininePast: Word('пересохла', 5),
  neuterPast: Word('пересохло', 5),
  pluralPast: Word('пересохли', 5),
  imperativeInformal: Word('пересохни', 5),
  imperativeFormal: Word('пересохните', 5),
  imperfect: [],
};

perfectVerbs.set(пересохнуть.name.text, пересохнуть);

export { пересохнуть };