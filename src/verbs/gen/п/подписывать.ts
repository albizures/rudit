import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подписывать: PerfectVerb = {
  name: Word('подписывать', 4),
  singular1stPerson: Word('подписываю', 4),
  singular2ndPerson: Word('подписываешь', 4),
  singular3rdPerson: Word('подписывает', 4),
  plural1stPerson: Word('подписываем', 4),
  plural2ndPerson: Word('подписываете', 4),
  plural3rdPerson: Word('подписывают', 4),
  masculinePast: Word('подписывал', 4),
  femininePast: Word('подписывала', 4),
  neuterPast: Word('подписывало', 4),
  pluralPast: Word('подписывали', 4),
  imperativeInformal: Word('подписывай', 4),
  imperativeFormal: Word('подписывайте', 4),
  imperfect: ['подписать'],
};

perfectVerbs.set(подписывать.name.text, подписывать);

export { подписывать };