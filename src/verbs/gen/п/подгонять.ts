import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгонять: PerfectVerb = {
  name: Word('подгонять', 6),
  singular1stPerson: Word('подгоняю', 6),
  singular2ndPerson: Word('подгоняешь', 6),
  singular3rdPerson: Word('подгоняет', 6),
  plural1stPerson: Word('подгоняем', 6),
  plural2ndPerson: Word('подгоняете', 6),
  plural3rdPerson: Word('подгоняют', 6),
  masculinePast: Word('подгонял', 6),
  femininePast: Word('подгоняла', 6),
  neuterPast: Word('подгоняло', 6),
  pluralPast: Word('подгоняли', 6),
  imperativeInformal: Word('подгоняй', 6),
  imperativeFormal: Word('подгоняйте', 6),
  imperfect: ['подогнать'],
};

perfectVerbs.set(подгонять.name.text, подгонять);

export { подгонять };