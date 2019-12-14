import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввязать: PerfectVerb = {
  name: Word('ввязать', 4),
  singular1stPerson: Word('ввяжу', 4),
  singular2ndPerson: Word('ввяжешь', 2),
  singular3rdPerson: Word('ввяжет', 2),
  plural1stPerson: Word('ввяжем', 2),
  plural2ndPerson: Word('ввяжете', 2),
  plural3rdPerson: Word('ввяжут', 2),
  masculinePast: Word('ввязал', 4),
  femininePast: Word('ввязала', 4),
  neuterPast: Word('ввязало', 4),
  pluralPast: Word('ввязали', 4),
  imperativeInformal: Word('ввяжи', 4),
  imperativeFormal: Word('ввяжите', 4),
  imperfect: [],
};

perfectVerbs.set(ввязать.name.text, ввязать);

export { ввязать };