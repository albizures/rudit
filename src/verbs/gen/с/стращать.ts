import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стращать: PerfectVerb = {
  name: Word('стращать', 5),
  singular1stPerson: Word('стращаю', 5),
  singular2ndPerson: Word('стращаешь', 5),
  singular3rdPerson: Word('стращает', 5),
  plural1stPerson: Word('стращаем', 5),
  plural2ndPerson: Word('стращаете', 5),
  plural3rdPerson: Word('стращают', 5),
  masculinePast: Word('стращал', 5),
  femininePast: Word('стращала', 5),
  neuterPast: Word('стращало', 5),
  pluralPast: Word('стращали', 5),
  imperativeInformal: Word('стращай', 5),
  imperativeFormal: Word('стращайте', 5),
  imperfect: ['застращать','постращать'],
};

perfectVerbs.set(стращать.name.text, стращать);

export { стращать };