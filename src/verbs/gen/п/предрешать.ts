import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предрешать: PerfectVerb = {
  name: Word('предрешать', 7),
  singular1stPerson: Word('предрешаю', 7),
  singular2ndPerson: Word('предрешаешь', 7),
  singular3rdPerson: Word('предрешает', 7),
  plural1stPerson: Word('предрешаем', 7),
  plural2ndPerson: Word('предрешаете', 7),
  plural3rdPerson: Word('предрешают', 7),
  masculinePast: Word('предрешал', 7),
  femininePast: Word('предрешала', 7),
  neuterPast: Word('предрешало', 7),
  pluralPast: Word('предрешали', 7),
  imperativeInformal: Word('предрешай', 7),
  imperativeFormal: Word('предрешайте', 7),
  imperfect: [],
};

perfectVerbs.set(предрешать.name.text, предрешать);

export { предрешать };