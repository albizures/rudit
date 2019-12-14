import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провонять: PerfectVerb = {
  name: Word('провонять', 6),
  singular1stPerson: Word('провоняю', 6),
  singular2ndPerson: Word('провоняешь', 6),
  singular3rdPerson: Word('провоняет', 6),
  plural1stPerson: Word('провоняем', 6),
  plural2ndPerson: Word('провоняете', 6),
  plural3rdPerson: Word('провоняют', 6),
  masculinePast: Word('провонял', 6),
  femininePast: Word('провоняла', 6),
  neuterPast: Word('провоняло', 6),
  pluralPast: Word('провоняли', 6),
  imperativeInformal: Word('провоняй', 6),
  imperativeFormal: Word('провоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(провонять.name.text, провонять);

export { провонять };