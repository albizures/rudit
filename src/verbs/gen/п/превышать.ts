import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превышать: PerfectVerb = {
  name: Word('превышать', 6),
  singular1stPerson: Word('превышаю', 6),
  singular2ndPerson: Word('превышаешь', 6),
  singular3rdPerson: Word('превышает', 6),
  plural1stPerson: Word('превышаем', 6),
  plural2ndPerson: Word('превышаете', 6),
  plural3rdPerson: Word('превышают', 6),
  masculinePast: Word('превышал', 6),
  femininePast: Word('превышала', 6),
  neuterPast: Word('превышало', 6),
  pluralPast: Word('превышали', 6),
  imperativeInformal: Word('превышай', 6),
  imperativeFormal: Word('превышайте', 6),
  imperfect: ['превысить'],
};

perfectVerbs.set(превышать.name.text, превышать);

export { превышать };