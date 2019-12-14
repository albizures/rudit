import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подцеплять: PerfectVerb = {
  name: Word('подцеплять', 7),
  singular1stPerson: Word('подцепляю', 7),
  singular2ndPerson: Word('подцепляешь', 7),
  singular3rdPerson: Word('подцепляет', 7),
  plural1stPerson: Word('подцепляем', 7),
  plural2ndPerson: Word('подцепляете', 7),
  plural3rdPerson: Word('подцепляют', 7),
  masculinePast: Word('подцеплял', 7),
  femininePast: Word('подцепляла', 7),
  neuterPast: Word('подцепляло', 7),
  pluralPast: Word('подцепляли', 7),
  imperativeInformal: Word('подцепляй', 7),
  imperativeFormal: Word('подцепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(подцеплять.name.text, подцеплять);

export { подцеплять };