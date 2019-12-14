import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрать: PerfectVerb = {
  name: Word('задрать', 4),
  singular1stPerson: Word('задеру', 5),
  singular2ndPerson: Word('задерёшь', 5),
  singular3rdPerson: Word('задерёт', 5),
  plural1stPerson: Word('задерём', 5),
  plural2ndPerson: Word('задерёте', 5),
  plural3rdPerson: Word('задерут', 5),
  masculinePast: Word('задрал', 4),
  femininePast: Word('задрала', 6),
  neuterPast: Word('задрало', 4),
  pluralPast: Word('задрали', 4),
  imperativeInformal: Word('задери', 5),
  imperativeFormal: Word('задерите', 5),
  imperfect: [],
};

perfectVerbs.set(задрать.name.text, задрать);

export { задрать };