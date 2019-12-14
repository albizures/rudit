import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввести: PerfectVerb = {
  name: Word('ввести', 5),
  singular1stPerson: Word('введу', 4),
  singular2ndPerson: Word('введёшь', 2),
  singular3rdPerson: Word('введёт', 2),
  plural1stPerson: Word('введём', 2),
  plural2ndPerson: Word('введёте', 2),
  plural3rdPerson: Word('введут', 4),
  masculinePast: Word('ввёл', 2),
  femininePast: Word('ввела', 4),
  neuterPast: Word('ввело', 4),
  pluralPast: Word('ввели', 4),
  imperativeInformal: Word('введи', 4),
  imperativeFormal: Word('введите', 4),
  imperfect: ['вводить'],
};

perfectVerbs.set(ввести.name.text, ввести);

export { ввести };