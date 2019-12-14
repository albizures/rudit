import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нанимать: PerfectVerb = {
  name: Word('нанимать', 5),
  singular1stPerson: Word('нанимаю', 5),
  singular2ndPerson: Word('нанимаешь', 5),
  singular3rdPerson: Word('нанимает', 5),
  plural1stPerson: Word('нанимаем', 5),
  plural2ndPerson: Word('нанимаете', 5),
  plural3rdPerson: Word('нанимают', 5),
  masculinePast: Word('нанимал', 5),
  femininePast: Word('нанимала', 5),
  neuterPast: Word('нанимало', 5),
  pluralPast: Word('нанимали', 5),
  imperativeInformal: Word('нанимай', 5),
  imperativeFormal: Word('нанимайте', 5),
  imperfect: ['нанять'],
};

perfectVerbs.set(нанимать.name.text, нанимать);

export { нанимать };