import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглашать: PerfectVerb = {
  name: Word('разглашать', 7),
  singular1stPerson: Word('разглашаю', 7),
  singular2ndPerson: Word('разглашаешь', 7),
  singular3rdPerson: Word('разглашает', 7),
  plural1stPerson: Word('разглашаем', 7),
  plural2ndPerson: Word('разглашаете', 7),
  plural3rdPerson: Word('разглашают', 7),
  masculinePast: Word('разглашал', 7),
  femininePast: Word('разглашала', 7),
  neuterPast: Word('разглашало', 7),
  pluralPast: Word('разглашали', 7),
  imperativeInformal: Word('разглашай', 7),
  imperativeFormal: Word('разглашайте', 7),
  imperfect: [],
};

perfectVerbs.set(разглашать.name.text, разглашать);

export { разглашать };