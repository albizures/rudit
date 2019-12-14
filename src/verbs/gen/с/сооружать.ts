import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сооружать: PerfectVerb = {
  name: Word('сооружать', 6),
  singular1stPerson: Word('сооружаю', 6),
  singular2ndPerson: Word('сооружаешь', 6),
  singular3rdPerson: Word('сооружает', 6),
  plural1stPerson: Word('сооружаем', 6),
  plural2ndPerson: Word('сооружаете', 6),
  plural3rdPerson: Word('сооружают', 6),
  masculinePast: Word('сооружал', 6),
  femininePast: Word('сооружала', 6),
  neuterPast: Word('сооружало', 6),
  pluralPast: Word('сооружали', 6),
  imperativeInformal: Word('сооружай', 6),
  imperativeFormal: Word('сооружайте', 6),
  imperfect: [],
};

perfectVerbs.set(сооружать.name.text, сооружать);

export { сооружать };