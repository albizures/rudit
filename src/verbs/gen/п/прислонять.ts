import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислонять: PerfectVerb = {
  name: Word('прислонять', 7),
  singular1stPerson: Word('прислоняю', 7),
  singular2ndPerson: Word('прислоняешь', 7),
  singular3rdPerson: Word('прислоняет', 7),
  plural1stPerson: Word('прислоняем', 7),
  plural2ndPerson: Word('прислоняете', 7),
  plural3rdPerson: Word('прислоняют', 7),
  masculinePast: Word('прислонял', 7),
  femininePast: Word('прислоняла', 7),
  neuterPast: Word('прислоняло', 7),
  pluralPast: Word('прислоняли', 7),
  imperativeInformal: Word('прислоняй', 7),
  imperativeFormal: Word('прислоняйте', 7),
  imperfect: [],
};

perfectVerbs.set(прислонять.name.text, прислонять);

export { прислонять };