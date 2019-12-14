import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мараковать: PerfectVerb = {
  name: Word('мараковать', 7),
  singular1stPerson: Word('маракую', 5),
  singular2ndPerson: Word('маракуешь', 5),
  singular3rdPerson: Word('маракует', 5),
  plural1stPerson: Word('маракуем', 5),
  plural2ndPerson: Word('маракуете', 5),
  plural3rdPerson: Word('маракуют', 5),
  masculinePast: Word('мараковал', 7),
  femininePast: Word('мараковала', 7),
  neuterPast: Word('мараковало', 7),
  pluralPast: Word('мараковали', 7),
  imperativeInformal: Word('маракуй', 5),
  imperativeFormal: Word('маракуйте', 5),
  imperfect: [],
};

perfectVerbs.set(мараковать.name.text, мараковать);

export { мараковать };