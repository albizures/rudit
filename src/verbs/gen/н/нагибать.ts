import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагибать: PerfectVerb = {
  name: Word('нагибать', 5),
  singular1stPerson: Word('нагибаю', 5),
  singular2ndPerson: Word('нагибаешь', 5),
  singular3rdPerson: Word('нагибает', 5),
  plural1stPerson: Word('нагибаем', 5),
  plural2ndPerson: Word('нагибаете', 5),
  plural3rdPerson: Word('нагибают', 5),
  masculinePast: Word('нагибал', 5),
  femininePast: Word('нагибала', 5),
  neuterPast: Word('нагибало', 5),
  pluralPast: Word('нагибали', 5),
  imperativeInformal: Word('нагибай', 5),
  imperativeFormal: Word('нагибайте', 5),
  imperfect: [],
};

perfectVerbs.set(нагибать.name.text, нагибать);

export { нагибать };