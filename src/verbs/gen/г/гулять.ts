import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гулять: PerfectVerb = {
  name: Word('гулять', 3),
  singular1stPerson: Word('гуляю', 3),
  singular2ndPerson: Word('гуляешь', 3),
  singular3rdPerson: Word('гуляет', 3),
  plural1stPerson: Word('гуляем', 3),
  plural2ndPerson: Word('гуляете', 3),
  plural3rdPerson: Word('гуляют', 3),
  masculinePast: Word('гулял', 3),
  femininePast: Word('гуляла', 3),
  neuterPast: Word('гуляло', 3),
  pluralPast: Word('гуляли', 3),
  imperativeInformal: Word('гуляй', 3),
  imperativeFormal: Word('гуляйте', 3),
  imperfect: ['погулять'],
};

perfectVerbs.set(гулять.name.text, гулять);

export { гулять };