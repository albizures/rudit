import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угонять: PerfectVerb = {
  name: Word('угонять', 4),
  singular1stPerson: Word('угоняю', 4),
  singular2ndPerson: Word('угоняешь', 4),
  singular3rdPerson: Word('угоняет', 4),
  plural1stPerson: Word('угоняем', 4),
  plural2ndPerson: Word('угоняете', 4),
  plural3rdPerson: Word('угоняют', 4),
  masculinePast: Word('угонял', 4),
  femininePast: Word('угоняла', 4),
  neuterPast: Word('угоняло', 4),
  pluralPast: Word('угоняли', 4),
  imperativeInformal: Word('угоняй', 4),
  imperativeFormal: Word('угоняйте', 4),
  imperfect: [],
};

perfectVerbs.set(угонять.name.text, угонять);

export { угонять };