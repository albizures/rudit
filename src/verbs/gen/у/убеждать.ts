import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убеждать: PerfectVerb = {
  name: Word('убеждать', 5),
  singular1stPerson: Word('убеждаю', 5),
  singular2ndPerson: Word('убеждаешь', 5),
  singular3rdPerson: Word('убеждает', 5),
  plural1stPerson: Word('убеждаем', 5),
  plural2ndPerson: Word('убеждаете', 5),
  plural3rdPerson: Word('убеждают', 5),
  masculinePast: Word('убеждал', 5),
  femininePast: Word('убеждала', 5),
  neuterPast: Word('убеждало', 5),
  pluralPast: Word('убеждали', 5),
  imperativeInformal: Word('убеждай', 5),
  imperativeFormal: Word('убеждайте', 5),
  imperfect: ['убедить'],
};

perfectVerbs.set(убеждать.name.text, убеждать);

export { убеждать };