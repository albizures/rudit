import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проломать: PerfectVerb = {
  name: Word('проломать', 6),
  singular1stPerson: Word('проломаю', 6),
  singular2ndPerson: Word('проломаешь', 6),
  singular3rdPerson: Word('проломает', 6),
  plural1stPerson: Word('проломаем', 6),
  plural2ndPerson: Word('проломаете', 6),
  plural3rdPerson: Word('проломают', 6),
  masculinePast: Word('проломал', 6),
  femininePast: Word('проломала', 6),
  neuterPast: Word('проломало', 6),
  pluralPast: Word('проломали', 6),
  imperativeInformal: Word('проломай', 6),
  imperativeFormal: Word('проломайте', 6),
  imperfect: [],
};

perfectVerbs.set(проломать.name.text, проломать);

export { проломать };