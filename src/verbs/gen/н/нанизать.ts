import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанизать: PerfectVerb = {
  name: Word('нанизать', 5),
  singular1stPerson: Word('нанижу', 5),
  singular2ndPerson: Word('нанижешь', 3),
  singular3rdPerson: Word('нанижет', 3),
  plural1stPerson: Word('нанижем', 3),
  plural2ndPerson: Word('нанижете', 3),
  plural3rdPerson: Word('нанижут', 3),
  masculinePast: Word('нанизал', 5),
  femininePast: Word('нанизала', 5),
  neuterPast: Word('нанизало', 5),
  pluralPast: Word('нанизали', 5),
  imperativeInformal: Word('нанижи', 5),
  imperativeFormal: Word('нанижите', 5),
  imperfect: [],
};

perfectVerbs.set(нанизать.name.text, нанизать);

export { нанизать };