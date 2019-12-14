import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усохнуть: PerfectVerb = {
  name: Word('усохнуть', 2),
  singular1stPerson: Word('усохну', 2),
  singular2ndPerson: Word('усохнешь', 2),
  singular3rdPerson: Word('усохнет', 2),
  plural1stPerson: Word('усохнем', 2),
  plural2ndPerson: Word('усохнете', 2),
  plural3rdPerson: Word('усохнут', 2),
  masculinePast: Word('усох', 2),
  femininePast: Word('усохла', 2),
  neuterPast: Word('усохло', 2),
  pluralPast: Word('усохли', 2),
  imperativeInformal: Word('усохни', 2),
  imperativeFormal: Word('усохните', 2),
  imperfect: [],
};

perfectVerbs.set(усохнуть.name.text, усохнуть);

export { усохнуть };