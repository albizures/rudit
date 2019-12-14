import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отличать: PerfectVerb = {
  name: Word('отличать', 5),
  singular1stPerson: Word('отличаю', 5),
  singular2ndPerson: Word('отличаешь', 5),
  singular3rdPerson: Word('отличает', 5),
  plural1stPerson: Word('отличаем', 5),
  plural2ndPerson: Word('отличаете', 5),
  plural3rdPerson: Word('отличают', 5),
  masculinePast: Word('отличал', 5),
  femininePast: Word('отличала', 5),
  neuterPast: Word('отличало', 5),
  pluralPast: Word('отличали', 5),
  imperativeInformal: Word('отличай', 5),
  imperativeFormal: Word('отличайте', 5),
  imperfect: ['отличить'],
};

perfectVerbs.set(отличать.name.text, отличать);

export { отличать };