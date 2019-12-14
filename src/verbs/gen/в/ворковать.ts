import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворковать: PerfectVerb = {
  name: Word('ворковать', 6),
  singular1stPerson: Word('воркую', 4),
  singular2ndPerson: Word('воркуешь', 4),
  singular3rdPerson: Word('воркует', 4),
  plural1stPerson: Word('воркуем', 4),
  plural2ndPerson: Word('воркуете', 4),
  plural3rdPerson: Word('воркуют', 4),
  masculinePast: Word('ворковал', 6),
  femininePast: Word('ворковала', 6),
  neuterPast: Word('ворковало', 6),
  pluralPast: Word('ворковали', 6),
  imperativeInformal: Word('воркуй', 4),
  imperativeFormal: Word('воркуйте', 4),
  imperfect: ['поворковать'],
};

perfectVerbs.set(ворковать.name.text, ворковать);

export { ворковать };