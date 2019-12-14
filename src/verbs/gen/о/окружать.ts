import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окружать: PerfectVerb = {
  name: Word('окружать', 5),
  singular1stPerson: Word('окружаю', 5),
  singular2ndPerson: Word('окружаешь', 5),
  singular3rdPerson: Word('окружает', 5),
  plural1stPerson: Word('окружаем', 5),
  plural2ndPerson: Word('окружаете', 5),
  plural3rdPerson: Word('окружают', 5),
  masculinePast: Word('окружал', 5),
  femininePast: Word('окружала', 5),
  neuterPast: Word('окружало', 5),
  pluralPast: Word('окружали', 5),
  imperativeInformal: Word('окружай', 5),
  imperativeFormal: Word('окружайте', 5),
  imperfect: ['окружить'],
};

perfectVerbs.set(окружать.name.text, окружать);

export { окружать };