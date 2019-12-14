import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забулькать: PerfectVerb = {
  name: Word('забулькать', 3),
  singular1stPerson: Word('забулькаю', 3),
  singular2ndPerson: Word('забулькаешь', 3),
  singular3rdPerson: Word('забулькает', 3),
  plural1stPerson: Word('забулькаем', 3),
  plural2ndPerson: Word('забулькаете', 3),
  plural3rdPerson: Word('забулькают', 3),
  masculinePast: Word('забулькал', 3),
  femininePast: Word('забулькала', 3),
  neuterPast: Word('забулькало', 3),
  pluralPast: Word('забулькали', 3),
  imperativeInformal: Word('забулькай', 3),
  imperativeFormal: Word('забулькайте', 3),
  imperfect: [],
};

perfectVerbs.set(забулькать.name.text, забулькать);

export { забулькать };