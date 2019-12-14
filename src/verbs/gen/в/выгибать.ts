import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгибать: PerfectVerb = {
  name: Word('выгибать', 5),
  singular1stPerson: Word('выгибаю', 5),
  singular2ndPerson: Word('выгибаешь', 5),
  singular3rdPerson: Word('выгибает', 5),
  plural1stPerson: Word('выгибаем', 5),
  plural2ndPerson: Word('выгибаете', 5),
  plural3rdPerson: Word('выгибают', 5),
  masculinePast: Word('выгибал', 5),
  femininePast: Word('выгибала', 5),
  neuterPast: Word('выгибало', 5),
  pluralPast: Word('выгибали', 5),
  imperativeInformal: Word('выгибай', 5),
  imperativeFormal: Word('выгибайте', 5),
  imperfect: [],
};

perfectVerbs.set(выгибать.name.text, выгибать);

export { выгибать };