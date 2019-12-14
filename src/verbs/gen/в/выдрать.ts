import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдрать: PerfectVerb = {
  name: Word('выдрать', 1),
  singular1stPerson: Word('выдеру', 1),
  singular2ndPerson: Word('выдерешь', 1),
  singular3rdPerson: Word('выдерет', 1),
  plural1stPerson: Word('выдерем', 1),
  plural2ndPerson: Word('выдерете', 1),
  plural3rdPerson: Word('выдерут', 1),
  masculinePast: Word('выдрал', 1),
  femininePast: Word('выдрала', 1),
  neuterPast: Word('выдрало', 1),
  pluralPast: Word('выдрали', 1),
  imperativeInformal: Word('выдери', 1),
  imperativeFormal: Word('выдерите', 1),
  imperfect: [],
};

perfectVerbs.set(выдрать.name.text, выдрать);

export { выдрать };