import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгибать: PerfectVerb = {
  name: Word('отгибать', 5),
  singular1stPerson: Word('отгибаю', 5),
  singular2ndPerson: Word('отгибаешь', 5),
  singular3rdPerson: Word('отгибает', 5),
  plural1stPerson: Word('отгибаем', 5),
  plural2ndPerson: Word('отгибаете', 5),
  plural3rdPerson: Word('отгибают', 5),
  masculinePast: Word('отгибал', 5),
  femininePast: Word('отгибала', 5),
  neuterPast: Word('отгибало', 5),
  pluralPast: Word('отгибали', 5),
  imperativeInformal: Word('отгибай', 5),
  imperativeFormal: Word('отгибайте', 5),
  imperfect: [],
};

perfectVerbs.set(отгибать.name.text, отгибать);

export { отгибать };