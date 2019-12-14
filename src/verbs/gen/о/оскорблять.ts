import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскорблять: PerfectVerb = {
  name: Word('оскорблять', 7),
  singular1stPerson: Word('оскорбляю', 7),
  singular2ndPerson: Word('оскорбляешь', 7),
  singular3rdPerson: Word('оскорбляет', 7),
  plural1stPerson: Word('оскорбляем', 7),
  plural2ndPerson: Word('оскорбляете', 7),
  plural3rdPerson: Word('оскорбляют', 7),
  masculinePast: Word('оскорблял', 7),
  femininePast: Word('оскорбляла', 7),
  neuterPast: Word('оскорбляло', 7),
  pluralPast: Word('оскорбляли', 7),
  imperativeInformal: Word('оскорбляй', 7),
  imperativeFormal: Word('оскорбляйте', 7),
  imperfect: ['оскорбить'],
};

perfectVerbs.set(оскорблять.name.text, оскорблять);

export { оскорблять };