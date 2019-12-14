import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вонять: PerfectVerb = {
  name: Word('вонять', 3),
  singular1stPerson: Word('воняю', 3),
  singular2ndPerson: Word('воняешь', 3),
  singular3rdPerson: Word('воняет', 3),
  plural1stPerson: Word('воняем', 3),
  plural2ndPerson: Word('воняете', 3),
  plural3rdPerson: Word('воняют', 3),
  masculinePast: Word('вонял', 3),
  femininePast: Word('воняла', 3),
  neuterPast: Word('воняло', 3),
  pluralPast: Word('воняли', 3),
  imperativeInformal: Word('воняй', 3),
  imperativeFormal: Word('воняйте', 3),
  imperfect: ['завонять','навонять'],
};

perfectVerbs.set(вонять.name.text, вонять);

export { вонять };