import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выключать: PerfectVerb = {
  name: Word('выключать', 6),
  singular1stPerson: Word('выключаю', 6),
  singular2ndPerson: Word('выключаешь', 6),
  singular3rdPerson: Word('выключает', 6),
  plural1stPerson: Word('выключаем', 6),
  plural2ndPerson: Word('выключаете', 6),
  plural3rdPerson: Word('выключают', 6),
  masculinePast: Word('выключал', 6),
  femininePast: Word('выключала', 6),
  neuterPast: Word('выключало', 6),
  pluralPast: Word('выключали', 6),
  imperativeInformal: Word('выключай', 6),
  imperativeFormal: Word('выключайте', 6),
  imperfect: ['выключить'],
};

perfectVerbs.set(выключать.name.text, выключать);

export { выключать };