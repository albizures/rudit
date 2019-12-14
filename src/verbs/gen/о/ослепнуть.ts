import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослепнуть: PerfectVerb = {
  name: Word('ослепнуть', 3),
  singular1stPerson: Word('ослепну', 3),
  singular2ndPerson: Word('ослепнешь', 3),
  singular3rdPerson: Word('ослепнет', 3),
  plural1stPerson: Word('ослепнем', 3),
  plural2ndPerson: Word('ослепнете', 3),
  plural3rdPerson: Word('ослепнут', 3),
  masculinePast: Word('ослеп', 3),
  femininePast: Word('ослепла', 3),
  neuterPast: Word('ослепло', 3),
  pluralPast: Word('ослепли', 3),
  imperativeInformal: Word('ослепни', 3),
  imperativeFormal: Word('ослепните', 3),
  imperfect: [],
};

perfectVerbs.set(ослепнуть.name.text, ослепнуть);

export { ослепнуть };