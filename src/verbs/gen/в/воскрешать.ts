import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воскрешать: PerfectVerb = {
  name: Word('воскрешать', 7),
  singular1stPerson: Word('воскрешаю', 7),
  singular2ndPerson: Word('воскрешаешь', 7),
  singular3rdPerson: Word('воскрешает', 7),
  plural1stPerson: Word('воскрешаем', 7),
  plural2ndPerson: Word('воскрешаете', 7),
  plural3rdPerson: Word('воскрешают', 7),
  masculinePast: Word('воскрешал', 7),
  femininePast: Word('воскрешала', 7),
  neuterPast: Word('воскрешало', 7),
  pluralPast: Word('воскрешали', 7),
  imperativeInformal: Word('воскрешай', 7),
  imperativeFormal: Word('воскрешайте', 7),
  imperfect: [],
};

perfectVerbs.set(воскрешать.name.text, воскрешать);

export { воскрешать };