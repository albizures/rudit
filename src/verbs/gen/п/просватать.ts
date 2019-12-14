import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просватать: PerfectVerb = {
  name: Word('просватать', 5),
  singular1stPerson: Word('просватаю', 5),
  singular2ndPerson: Word('просватаешь', 5),
  singular3rdPerson: Word('просватает', 5),
  plural1stPerson: Word('просватаем', 5),
  plural2ndPerson: Word('просватаете', 5),
  plural3rdPerson: Word('просватают', 5),
  masculinePast: Word('просватал', 5),
  femininePast: Word('просватала', 5),
  neuterPast: Word('просватало', 5),
  pluralPast: Word('просватали', 5),
  imperativeInformal: Word('просватай', 5),
  imperativeFormal: Word('просватайте', 5),
  imperfect: [],
};

perfectVerbs.set(просватать.name.text, просватать);

export { просватать };