import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соглашать: PerfectVerb = {
  name: Word('соглашать', 6),
  singular1stPerson: Word('соглашаю', 6),
  singular2ndPerson: Word('соглашаешь', 6),
  singular3rdPerson: Word('соглашает', 6),
  plural1stPerson: Word('соглашаем', 6),
  plural2ndPerson: Word('соглашаете', 6),
  plural3rdPerson: Word('соглашают', 6),
  masculinePast: Word('соглашал', 6),
  femininePast: Word('соглашала', 6),
  neuterPast: Word('соглашало', 6),
  pluralPast: Word('соглашали', 6),
  imperativeInformal: Word('соглашай', 6),
  imperativeFormal: Word('соглашайте', 6),
  imperfect: [],
};

perfectVerbs.set(соглашать.name.text, соглашать);

export { соглашать };