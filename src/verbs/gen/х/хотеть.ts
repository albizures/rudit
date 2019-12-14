import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хотеть: PerfectVerb = {
  name: Word('хотеть', 3),
  singular1stPerson: Word('хочу', 3),
  singular2ndPerson: Word('хочешь', 1),
  singular3rdPerson: Word('хочет', 1),
  plural1stPerson: Word('хотим', 3),
  plural2ndPerson: Word('хотите', 3),
  plural3rdPerson: Word('хотят', 3),
  masculinePast: Word('хотел', 3),
  femininePast: Word('хотела', 3),
  neuterPast: Word('хотело', 3),
  pluralPast: Word('хотели', 3),
  imperativeInformal: Word('хоти', 3),
  imperativeFormal: Word('хотите', 3),
  imperfect: ['захотеть'],
};

perfectVerbs.set(хотеть.name.text, хотеть);

export { хотеть };