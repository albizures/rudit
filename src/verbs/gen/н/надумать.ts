import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надумать: PerfectVerb = {
  name: Word('надумать', 3),
  singular1stPerson: Word('надумаю', 3),
  singular2ndPerson: Word('надумаешь', 3),
  singular3rdPerson: Word('надумает', 3),
  plural1stPerson: Word('надумаем', 3),
  plural2ndPerson: Word('надумаете', 3),
  plural3rdPerson: Word('надумают', 3),
  masculinePast: Word('надумал', 3),
  femininePast: Word('надумала', 3),
  neuterPast: Word('надумало', 3),
  pluralPast: Word('надумали', 3),
  imperativeInformal: Word('надумай', 3),
  imperativeFormal: Word('надумайте', 3),
  imperfect: [],
};

perfectVerbs.set(надумать.name.text, надумать);

export { надумать };