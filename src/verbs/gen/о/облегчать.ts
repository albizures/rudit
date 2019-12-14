import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облегчать: PerfectVerb = {
  name: Word('облегчать', 6),
  singular1stPerson: Word('облегчаю', 6),
  singular2ndPerson: Word('облегчаешь', 6),
  singular3rdPerson: Word('облегчает', 6),
  plural1stPerson: Word('облегчаем', 6),
  plural2ndPerson: Word('облегчаете', 6),
  plural3rdPerson: Word('облегчают', 6),
  masculinePast: Word('облегчал', 6),
  femininePast: Word('облегчала', 6),
  neuterPast: Word('облегчало', 6),
  pluralPast: Word('облегчали', 6),
  imperativeInformal: Word('облегчай', 6),
  imperativeFormal: Word('облегчайте', 6),
  imperfect: ['облегчить'],
};

perfectVerbs.set(облегчать.name.text, облегчать);

export { облегчать };