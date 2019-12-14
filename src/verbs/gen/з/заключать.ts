import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заключать: PerfectVerb = {
  name: Word('заключать', 6),
  singular1stPerson: Word('заключаю', 6),
  singular2ndPerson: Word('заключаешь', 6),
  singular3rdPerson: Word('заключает', 6),
  plural1stPerson: Word('заключаем', 6),
  plural2ndPerson: Word('заключаете', 6),
  plural3rdPerson: Word('заключают', 6),
  masculinePast: Word('заключал', 6),
  femininePast: Word('заключала', 6),
  neuterPast: Word('заключало', 6),
  pluralPast: Word('заключали', 6),
  imperativeInformal: Word('заключай', 6),
  imperativeFormal: Word('заключайте', 6),
  imperfect: ['заключить'],
};

perfectVerbs.set(заключать.name.text, заключать);

export { заключать };