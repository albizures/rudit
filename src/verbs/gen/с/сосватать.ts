import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосватать: PerfectVerb = {
  name: Word('сосватать', 4),
  singular1stPerson: Word('сосватаю', 4),
  singular2ndPerson: Word('сосватаешь', 4),
  singular3rdPerson: Word('сосватает', 4),
  plural1stPerson: Word('сосватаем', 4),
  plural2ndPerson: Word('сосватаете', 4),
  plural3rdPerson: Word('сосватают', 4),
  masculinePast: Word('сосватал', 4),
  femininePast: Word('сосватала', 4),
  neuterPast: Word('сосватало', 4),
  pluralPast: Word('сосватали', 4),
  imperativeInformal: Word('сосватай', 4),
  imperativeFormal: Word('сосватайте', 4),
  imperfect: [],
};

perfectVerbs.set(сосватать.name.text, сосватать);

export { сосватать };