import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссохнуть: PerfectVerb = {
  name: Word('иссохнуть', 3),
  singular1stPerson: Word('иссохну', 3),
  singular2ndPerson: Word('иссохнешь', 3),
  singular3rdPerson: Word('иссохнет', 3),
  plural1stPerson: Word('иссохнем', 3),
  plural2ndPerson: Word('иссохнете', 3),
  plural3rdPerson: Word('иссохнут', 3),
  masculinePast: Word('иссох', 3),
  femininePast: Word('иссохла', 3),
  neuterPast: Word('иссохло', 3),
  pluralPast: Word('иссохли', 3),
  imperativeInformal: Word('иссохни', 3),
  imperativeFormal: Word('иссохните', 3),
  imperfect: [],
};

perfectVerbs.set(иссохнуть.name.text, иссохнуть);

export { иссохнуть };