import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгонять: PerfectVerb = {
  name: Word('выгонять', 5),
  singular1stPerson: Word('выгоняю', 5),
  singular2ndPerson: Word('выгоняешь', 5),
  singular3rdPerson: Word('выгоняет', 5),
  plural1stPerson: Word('выгоняем', 5),
  plural2ndPerson: Word('выгоняете', 5),
  plural3rdPerson: Word('выгоняют', 5),
  masculinePast: Word('выгонял', 5),
  femininePast: Word('выгоняла', 5),
  neuterPast: Word('выгоняло', 5),
  pluralPast: Word('выгоняли', 5),
  imperativeInformal: Word('выгоняй', 5),
  imperativeFormal: Word('выгоняйте', 5),
  imperfect: ['выгнать'],
};

perfectVerbs.set(выгонять.name.text, выгонять);

export { выгонять };