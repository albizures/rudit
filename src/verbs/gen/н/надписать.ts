import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надписать: PerfectVerb = {
  name: Word('надписать', 6),
  singular1stPerson: Word('надпишу', 6),
  singular2ndPerson: Word('надпишешь', 4),
  singular3rdPerson: Word('надпишет', 4),
  plural1stPerson: Word('надпишем', 4),
  plural2ndPerson: Word('надпишете', 4),
  plural3rdPerson: Word('надпишут', 4),
  masculinePast: Word('надписал', 6),
  femininePast: Word('надписала', 6),
  neuterPast: Word('надписало', 6),
  pluralPast: Word('надписали', 6),
  imperativeInformal: Word('надпиши', 6),
  imperativeFormal: Word('надпишите', 6),
  imperfect: [],
};

perfectVerbs.set(надписать.name.text, надписать);

export { надписать };