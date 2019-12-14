import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглашать: PerfectVerb = {
  name: Word('оглашать', 5),
  singular1stPerson: Word('оглашаю', 5),
  singular2ndPerson: Word('оглашаешь', 5),
  singular3rdPerson: Word('оглашает', 5),
  plural1stPerson: Word('оглашаем', 5),
  plural2ndPerson: Word('оглашаете', 5),
  plural3rdPerson: Word('оглашают', 5),
  masculinePast: Word('оглашал', 5),
  femininePast: Word('оглашала', 5),
  neuterPast: Word('оглашало', 5),
  pluralPast: Word('оглашали', 5),
  imperativeInformal: Word('оглашай', 5),
  imperativeFormal: Word('оглашайте', 5),
  imperfect: ['огласить'],
};

perfectVerbs.set(оглашать.name.text, оглашать);

export { оглашать };