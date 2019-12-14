import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похватать: PerfectVerb = {
  name: Word('похватать', 6),
  singular1stPerson: Word('похватаю', 6),
  singular2ndPerson: Word('похватаешь', 6),
  singular3rdPerson: Word('похватает', 6),
  plural1stPerson: Word('похватаем', 6),
  plural2ndPerson: Word('похватаете', 6),
  plural3rdPerson: Word('похватают', 6),
  masculinePast: Word('похватал', 6),
  femininePast: Word('похватала', 6),
  neuterPast: Word('похватало', 6),
  pluralPast: Word('похватали', 6),
  imperativeInformal: Word('похватай', 6),
  imperativeFormal: Word('похватайте', 6),
  imperfect: [],
};

perfectVerbs.set(похватать.name.text, похватать);

export { похватать };