import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кончать: PerfectVerb = {
  name: Word('кончать', 4),
  singular1stPerson: Word('кончаю', 4),
  singular2ndPerson: Word('кончаешь', 4),
  singular3rdPerson: Word('кончает', 4),
  plural1stPerson: Word('кончаем', 4),
  plural2ndPerson: Word('кончаете', 4),
  plural3rdPerson: Word('кончают', 4),
  masculinePast: Word('кончал', 4),
  femininePast: Word('кончала', 4),
  neuterPast: Word('кончало', 4),
  pluralPast: Word('кончали', 4),
  imperativeInformal: Word('кончай', 4),
  imperativeFormal: Word('кончайте', 4),
  imperfect: ['кончить'],
};

perfectVerbs.set(кончать.name.text, кончать);

export { кончать };