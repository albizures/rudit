import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклонять: PerfectVerb = {
  name: Word('наклонять', 6),
  singular1stPerson: Word('наклоняю', 6),
  singular2ndPerson: Word('наклоняешь', 6),
  singular3rdPerson: Word('наклоняет', 6),
  plural1stPerson: Word('наклоняем', 6),
  plural2ndPerson: Word('наклоняете', 6),
  plural3rdPerson: Word('наклоняют', 6),
  masculinePast: Word('наклонял', 6),
  femininePast: Word('наклоняла', 6),
  neuterPast: Word('наклоняло', 6),
  pluralPast: Word('наклоняли', 6),
  imperativeInformal: Word('наклоняй', 6),
  imperativeFormal: Word('наклоняйте', 6),
  imperfect: ['наклонить'],
};

perfectVerbs.set(наклонять.name.text, наклонять);

export { наклонять };