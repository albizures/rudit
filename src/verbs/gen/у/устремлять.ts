import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устремлять: PerfectVerb = {
  name: Word('устремлять', 7),
  singular1stPerson: Word('устремляю', 7),
  singular2ndPerson: Word('устремляешь', 7),
  singular3rdPerson: Word('устремляет', 7),
  plural1stPerson: Word('устремляем', 7),
  plural2ndPerson: Word('устремляете', 7),
  plural3rdPerson: Word('устремляют', 7),
  masculinePast: Word('устремлял', 7),
  femininePast: Word('устремляла', 7),
  neuterPast: Word('устремляло', 7),
  pluralPast: Word('устремляли', 7),
  imperativeInformal: Word('устремляй', 7),
  imperativeFormal: Word('устремляйте', 7),
  imperfect: [],
};

perfectVerbs.set(устремлять.name.text, устремлять);

export { устремлять };