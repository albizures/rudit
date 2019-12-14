import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стекать: PerfectVerb = {
  name: Word('стекать', 4),
  singular1stPerson: Word('стекаю', 4),
  singular2ndPerson: Word('стекаешь', 4),
  singular3rdPerson: Word('стекает', 4),
  plural1stPerson: Word('стекаем', 4),
  plural2ndPerson: Word('стекаете', 4),
  plural3rdPerson: Word('стекают', 4),
  masculinePast: Word('стекал', 4),
  femininePast: Word('стекала', 4),
  neuterPast: Word('стекало', 4),
  pluralPast: Word('стекали', 4),
  imperativeInformal: Word('стекай', 4),
  imperativeFormal: Word('стекайте', 4),
  imperfect: ['стечь'],
};

perfectVerbs.set(стекать.name.text, стекать);

export { стекать };