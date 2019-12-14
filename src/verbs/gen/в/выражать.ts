import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выражать: PerfectVerb = {
  name: Word('выражать', 5),
  singular1stPerson: Word('выражаю', 5),
  singular2ndPerson: Word('выражаешь', 5),
  singular3rdPerson: Word('выражает', 5),
  plural1stPerson: Word('выражаем', 5),
  plural2ndPerson: Word('выражаете', 5),
  plural3rdPerson: Word('выражают', 5),
  masculinePast: Word('выражал', 5),
  femininePast: Word('выражала', 5),
  neuterPast: Word('выражало', 5),
  pluralPast: Word('выражали', 5),
  imperativeInformal: Word('выражай', 5),
  imperativeFormal: Word('выражайте', 5),
  imperfect: ['выразить'],
};

perfectVerbs.set(выражать.name.text, выражать);

export { выражать };