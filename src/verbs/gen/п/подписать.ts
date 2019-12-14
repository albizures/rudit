import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подписать: PerfectVerb = {
  name: Word('подписать', 6),
  singular1stPerson: Word('подпишу', 6),
  singular2ndPerson: Word('подпишешь', 4),
  singular3rdPerson: Word('подпишет', 4),
  plural1stPerson: Word('подпишем', 4),
  plural2ndPerson: Word('подпишете', 4),
  plural3rdPerson: Word('подпишут', 4),
  masculinePast: Word('подписал', 6),
  femininePast: Word('подписала', 6),
  neuterPast: Word('подписало', 6),
  pluralPast: Word('подписали', 6),
  imperativeInformal: Word('подпиши', 6),
  imperativeFormal: Word('подпишите', 6),
  imperfect: ['подписывать'],
};

perfectVerbs.set(подписать.name.text, подписать);

export { подписать };