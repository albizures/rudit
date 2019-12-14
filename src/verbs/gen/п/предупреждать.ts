import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предупреждать: PerfectVerb = {
  name: Word('предупреждать', 10),
  singular1stPerson: Word('предупреждаю', 10),
  singular2ndPerson: Word('предупреждаешь', 10),
  singular3rdPerson: Word('предупреждает', 10),
  plural1stPerson: Word('предупреждаем', 10),
  plural2ndPerson: Word('предупреждаете', 10),
  plural3rdPerson: Word('предупреждают', 10),
  masculinePast: Word('предупреждал', 10),
  femininePast: Word('предупреждала', 10),
  neuterPast: Word('предупреждало', 10),
  pluralPast: Word('предупреждали', 10),
  imperativeInformal: Word('предупреждай', 10),
  imperativeFormal: Word('предупреждайте', 10),
  imperfect: ['предупредить'],
};

perfectVerbs.set(предупреждать.name.text, предупреждать);

export { предупреждать };