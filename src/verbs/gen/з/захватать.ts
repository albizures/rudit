import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захватать: PerfectVerb = {
  name: Word('захватать', 6),
  singular1stPerson: Word('захватаю', 6),
  singular2ndPerson: Word('захватаешь', 6),
  singular3rdPerson: Word('захватает', 6),
  plural1stPerson: Word('захватаем', 6),
  plural2ndPerson: Word('захватаете', 6),
  plural3rdPerson: Word('захватают', 6),
  masculinePast: Word('захватал', 6),
  femininePast: Word('захватала', 6),
  neuterPast: Word('захватало', 6),
  pluralPast: Word('захватали', 6),
  imperativeInformal: Word('захватай', 6),
  imperativeFormal: Word('захватайте', 6),
  imperfect: [],
};

perfectVerbs.set(захватать.name.text, захватать);

export { захватать };