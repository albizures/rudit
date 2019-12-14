import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдалять: PerfectVerb = {
  name: Word('отдалять', 5),
  singular1stPerson: Word('отдаляю', 5),
  singular2ndPerson: Word('отдаляешь', 5),
  singular3rdPerson: Word('отдаляет', 5),
  plural1stPerson: Word('отдаляем', 5),
  plural2ndPerson: Word('отдаляете', 5),
  plural3rdPerson: Word('отдаляют', 5),
  masculinePast: Word('отдалял', 5),
  femininePast: Word('отдаляла', 5),
  neuterPast: Word('отдаляло', 5),
  pluralPast: Word('отдаляли', 5),
  imperativeInformal: Word('отдаляй', 5),
  imperativeFormal: Word('отдаляйте', 5),
  imperfect: ['отдалить'],
};

perfectVerbs.set(отдалять.name.text, отдалять);

export { отдалять };