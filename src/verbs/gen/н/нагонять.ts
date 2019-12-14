import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагонять: PerfectVerb = {
  name: Word('нагонять', 5),
  singular1stPerson: Word('нагоняю', 5),
  singular2ndPerson: Word('нагоняешь', 5),
  singular3rdPerson: Word('нагоняет', 5),
  plural1stPerson: Word('нагоняем', 5),
  plural2ndPerson: Word('нагоняете', 5),
  plural3rdPerson: Word('нагоняют', 5),
  masculinePast: Word('нагонял', 5),
  femininePast: Word('нагоняла', 5),
  neuterPast: Word('нагоняло', 5),
  pluralPast: Word('нагоняли', 5),
  imperativeInformal: Word('нагоняй', 5),
  imperativeFormal: Word('нагоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(нагонять.name.text, нагонять);

export { нагонять };