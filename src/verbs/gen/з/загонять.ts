import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загонять: PerfectVerb = {
  name: Word('загонять', 5),
  singular1stPerson: Word('загоняю', 5),
  singular2ndPerson: Word('загоняешь', 5),
  singular3rdPerson: Word('загоняет', 5),
  plural1stPerson: Word('загоняем', 5),
  plural2ndPerson: Word('загоняете', 5),
  plural3rdPerson: Word('загоняют', 5),
  masculinePast: Word('загонял', 5),
  femininePast: Word('загоняла', 5),
  neuterPast: Word('загоняло', 5),
  pluralPast: Word('загоняли', 5),
  imperativeInformal: Word('загоняй', 5),
  imperativeFormal: Word('загоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(загонять.name.text, загонять);

export { загонять };