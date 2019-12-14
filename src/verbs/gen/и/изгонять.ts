import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгонять: PerfectVerb = {
  name: Word('изгонять', 5),
  singular1stPerson: Word('изгоняю', 5),
  singular2ndPerson: Word('изгоняешь', 5),
  singular3rdPerson: Word('изгоняет', 5),
  plural1stPerson: Word('изгоняем', 5),
  plural2ndPerson: Word('изгоняете', 5),
  plural3rdPerson: Word('изгоняют', 5),
  masculinePast: Word('изгонял', 5),
  femininePast: Word('изгоняла', 5),
  neuterPast: Word('изгоняло', 5),
  pluralPast: Word('изгоняли', 5),
  imperativeInformal: Word('изгоняй', 5),
  imperativeFormal: Word('изгоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(изгонять.name.text, изгонять);

export { изгонять };