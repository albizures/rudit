import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присохнуть: PerfectVerb = {
  name: Word('присохнуть', 4),
  singular1stPerson: Word('присохну', 4),
  singular2ndPerson: Word('присохнешь', 4),
  singular3rdPerson: Word('присохнет', 4),
  plural1stPerson: Word('присохнем', 4),
  plural2ndPerson: Word('присохнете', 4),
  plural3rdPerson: Word('присохнут', 4),
  masculinePast: Word('присох', 4),
  femininePast: Word('присохла', 4),
  neuterPast: Word('присохло', 4),
  pluralPast: Word('присохли', 4),
  imperativeInformal: Word('присохни', 4),
  imperativeFormal: Word('присохните', 4),
  imperfect: [],
};

perfectVerbs.set(присохнуть.name.text, присохнуть);

export { присохнуть };