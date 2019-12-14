import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удалять: PerfectVerb = {
  name: Word('удалять', 4),
  singular1stPerson: Word('удаляю', 4),
  singular2ndPerson: Word('удаляешь', 4),
  singular3rdPerson: Word('удаляет', 4),
  plural1stPerson: Word('удаляем', 4),
  plural2ndPerson: Word('удаляете', 4),
  plural3rdPerson: Word('удаляют', 4),
  masculinePast: Word('удалял', 4),
  femininePast: Word('удаляла', 4),
  neuterPast: Word('удаляло', 4),
  pluralPast: Word('удаляли', 4),
  imperativeInformal: Word('удаляй', 4),
  imperativeFormal: Word('удаляйте', 4),
  imperfect: ['удалить'],
};

perfectVerbs.set(удалять.name.text, удалять);

export { удалять };