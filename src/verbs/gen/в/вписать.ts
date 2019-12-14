import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вписать: PerfectVerb = {
  name: Word('вписать', 4),
  singular1stPerson: Word('впишу', 4),
  singular2ndPerson: Word('впишешь', 2),
  singular3rdPerson: Word('впишет', 2),
  plural1stPerson: Word('впишем', 2),
  plural2ndPerson: Word('впишете', 2),
  plural3rdPerson: Word('впишут', 2),
  masculinePast: Word('вписал', 4),
  femininePast: Word('вписала', 4),
  neuterPast: Word('вписало', 4),
  pluralPast: Word('вписали', 4),
  imperativeInformal: Word('впиши', 4),
  imperativeFormal: Word('впишите', 4),
  imperfect: [],
};

perfectVerbs.set(вписать.name.text, вписать);

export { вписать };