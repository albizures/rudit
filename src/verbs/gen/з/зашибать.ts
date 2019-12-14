import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашибать: PerfectVerb = {
  name: Word('зашибать', 5),
  singular1stPerson: Word('зашибаю', 5),
  singular2ndPerson: Word('зашибаешь', 5),
  singular3rdPerson: Word('зашибает', 5),
  plural1stPerson: Word('зашибаем', 5),
  plural2ndPerson: Word('зашибаете', 5),
  plural3rdPerson: Word('зашибают', 5),
  masculinePast: Word('зашибал', 5),
  femininePast: Word('зашибала', 5),
  neuterPast: Word('зашибало', 5),
  pluralPast: Word('зашибали', 5),
  imperativeInformal: Word('зашибай', 5),
  imperativeFormal: Word('зашибайте', 5),
  imperfect: [],
};

perfectVerbs.set(зашибать.name.text, зашибать);

export { зашибать };