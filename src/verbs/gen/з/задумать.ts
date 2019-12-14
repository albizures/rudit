import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задумать: PerfectVerb = {
  name: Word('задумать', 3),
  singular1stPerson: Word('задумаю', 3),
  singular2ndPerson: Word('задумаешь', 3),
  singular3rdPerson: Word('задумает', 3),
  plural1stPerson: Word('задумаем', 3),
  plural2ndPerson: Word('задумаете', 3),
  plural3rdPerson: Word('задумают', 3),
  masculinePast: Word('задумал', 3),
  femininePast: Word('задумала', 3),
  neuterPast: Word('задумало', 3),
  pluralPast: Word('задумали', 3),
  imperativeInformal: Word('задумай', 3),
  imperativeFormal: Word('задумайте', 3),
  imperfect: [],
};

perfectVerbs.set(задумать.name.text, задумать);

export { задумать };