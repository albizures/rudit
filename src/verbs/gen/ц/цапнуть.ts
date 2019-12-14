import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цапнуть: PerfectVerb = {
  name: Word('цапнуть', 1),
  singular1stPerson: Word('цапну', 1),
  singular2ndPerson: Word('цапнешь', 1),
  singular3rdPerson: Word('цапнет', 1),
  plural1stPerson: Word('цапнем', 1),
  plural2ndPerson: Word('цапнете', 1),
  plural3rdPerson: Word('цапнут', 1),
  masculinePast: Word('цапнул', 1),
  femininePast: Word('цапнула', 1),
  neuterPast: Word('цапнуло', 1),
  pluralPast: Word('цапнули', 1),
  imperativeInformal: Word('цапни', 1),
  imperativeFormal: Word('цапните', 1),
  imperfect: [],
};

perfectVerbs.set(цапнуть.name.text, цапнуть);

export { цапнуть };