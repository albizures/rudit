import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахватать: PerfectVerb = {
  name: Word('нахватать', 6),
  singular1stPerson: Word('нахватаю', 6),
  singular2ndPerson: Word('нахватаешь', 6),
  singular3rdPerson: Word('нахватает', 6),
  plural1stPerson: Word('нахватаем', 6),
  plural2ndPerson: Word('нахватаете', 6),
  plural3rdPerson: Word('нахватают', 6),
  masculinePast: Word('нахватал', 6),
  femininePast: Word('нахватала', 6),
  neuterPast: Word('нахватало', 6),
  pluralPast: Word('нахватали', 6),
  imperativeInformal: Word('нахватай', 6),
  imperativeFormal: Word('нахватайте', 6),
  imperfect: [],
};

perfectVerbs.set(нахватать.name.text, нахватать);

export { нахватать };