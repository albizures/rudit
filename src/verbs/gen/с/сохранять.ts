import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сохранять: PerfectVerb = {
  name: Word('сохранять', 6),
  singular1stPerson: Word('сохраняю', 6),
  singular2ndPerson: Word('сохраняешь', 6),
  singular3rdPerson: Word('сохраняет', 6),
  plural1stPerson: Word('сохраняем', 6),
  plural2ndPerson: Word('сохраняете', 6),
  plural3rdPerson: Word('сохраняют', 6),
  masculinePast: Word('сохранял', 6),
  femininePast: Word('сохраняла', 6),
  neuterPast: Word('сохраняло', 6),
  pluralPast: Word('сохраняли', 6),
  imperativeInformal: Word('сохраняй', 6),
  imperativeFormal: Word('сохраняйте', 6),
  imperfect: ['сохранить'],
};

perfectVerbs.set(сохранять.name.text, сохранять);

export { сохранять };