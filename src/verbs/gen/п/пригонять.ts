import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригонять: PerfectVerb = {
  name: Word('пригонять', 6),
  singular1stPerson: Word('пригоняю', 6),
  singular2ndPerson: Word('пригоняешь', 6),
  singular3rdPerson: Word('пригоняет', 6),
  plural1stPerson: Word('пригоняем', 6),
  plural2ndPerson: Word('пригоняете', 6),
  plural3rdPerson: Word('пригоняют', 6),
  masculinePast: Word('пригонял', 6),
  femininePast: Word('пригоняла', 6),
  neuterPast: Word('пригоняло', 6),
  pluralPast: Word('пригоняли', 6),
  imperativeInformal: Word('пригоняй', 6),
  imperativeFormal: Word('пригоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(пригонять.name.text, пригонять);

export { пригонять };