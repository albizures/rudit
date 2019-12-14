import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соображать: PerfectVerb = {
  name: Word('соображать', 7),
  singular1stPerson: Word('соображаю', 7),
  singular2ndPerson: Word('соображаешь', 7),
  singular3rdPerson: Word('соображает', 7),
  plural1stPerson: Word('соображаем', 7),
  plural2ndPerson: Word('соображаете', 7),
  plural3rdPerson: Word('соображают', 7),
  masculinePast: Word('соображал', 7),
  femininePast: Word('соображала', 7),
  neuterPast: Word('соображало', 7),
  pluralPast: Word('соображали', 7),
  imperativeInformal: Word('соображай', 7),
  imperativeFormal: Word('соображайте', 7),
  imperfect: ['сообразить'],
};

perfectVerbs.set(соображать.name.text, соображать);

export { соображать };