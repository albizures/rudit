import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умещать: PerfectVerb = {
  name: Word('умещать', 4),
  singular1stPerson: Word('умещаю', 4),
  singular2ndPerson: Word('умещаешь', 4),
  singular3rdPerson: Word('умещает', 4),
  plural1stPerson: Word('умещаем', 4),
  plural2ndPerson: Word('умещаете', 4),
  plural3rdPerson: Word('умещают', 4),
  masculinePast: Word('умещал', 4),
  femininePast: Word('умещала', 4),
  neuterPast: Word('умещало', 4),
  pluralPast: Word('умещали', 4),
  imperativeInformal: Word('умещай', 4),
  imperativeFormal: Word('умещайте', 4),
  imperfect: [],
};

perfectVerbs.set(умещать.name.text, умещать);

export { умещать };