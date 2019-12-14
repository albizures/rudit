import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выйти: PerfectVerb = {
  name: Word('выйти', 1),
  singular1stPerson: Word('выйду', 1),
  singular2ndPerson: Word('выйдешь', 1),
  singular3rdPerson: Word('выйдет', 1),
  plural1stPerson: Word('выйдем', 1),
  plural2ndPerson: Word('выйдете', 1),
  plural3rdPerson: Word('выйдут', 1),
  masculinePast: Word('вышел', 1),
  femininePast: Word('вышла', 1),
  neuterPast: Word('вышло', 1),
  pluralPast: Word('вышли', 1),
  imperativeInformal: Word('выйди', 1),
  imperativeFormal: Word('выйдите', 1),
  imperfect: ['выходить'],
};

perfectVerbs.set(выйти.name.text, выйти);

export { выйти };