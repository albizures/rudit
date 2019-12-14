import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одичать: PerfectVerb = {
  name: Word('одичать', 4),
  singular1stPerson: Word('одичаю', 4),
  singular2ndPerson: Word('одичаешь', 4),
  singular3rdPerson: Word('одичает', 4),
  plural1stPerson: Word('одичаем', 4),
  plural2ndPerson: Word('одичаете', 4),
  plural3rdPerson: Word('одичают', 4),
  masculinePast: Word('одичал', 4),
  femininePast: Word('одичала', 4),
  neuterPast: Word('одичало', 4),
  pluralPast: Word('одичали', 4),
  imperativeInformal: Word('одичай', 4),
  imperativeFormal: Word('одичайте', 4),
  imperfect: [],
};

perfectVerbs.set(одичать.name.text, одичать);

export { одичать };