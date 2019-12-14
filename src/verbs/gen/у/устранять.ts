import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устранять: PerfectVerb = {
  name: Word('устранять', 6),
  singular1stPerson: Word('устраняю', 6),
  singular2ndPerson: Word('устраняешь', 6),
  singular3rdPerson: Word('устраняет', 6),
  plural1stPerson: Word('устраняем', 6),
  plural2ndPerson: Word('устраняете', 6),
  plural3rdPerson: Word('устраняют', 6),
  masculinePast: Word('устранял', 6),
  femininePast: Word('устраняла', 6),
  neuterPast: Word('устраняло', 6),
  pluralPast: Word('устраняли', 6),
  imperativeInformal: Word('устраняй', 6),
  imperativeFormal: Word('устраняйте', 6),
  imperfect: [],
};

perfectVerbs.set(устранять.name.text, устранять);

export { устранять };