import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исключать: PerfectVerb = {
  name: Word('исключать', 6),
  singular1stPerson: Word('исключаю', 6),
  singular2ndPerson: Word('исключаешь', 6),
  singular3rdPerson: Word('исключает', 6),
  plural1stPerson: Word('исключаем', 6),
  plural2ndPerson: Word('исключаете', 6),
  plural3rdPerson: Word('исключают', 6),
  masculinePast: Word('исключал', 6),
  femininePast: Word('исключала', 6),
  neuterPast: Word('исключало', 6),
  pluralPast: Word('исключали', 6),
  imperativeInformal: Word('исключай', 6),
  imperativeFormal: Word('исключайте', 6),
  imperfect: ['исключить'],
};

perfectVerbs.set(исключать.name.text, исключать);

export { исключать };