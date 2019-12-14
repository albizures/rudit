import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захотеть: PerfectVerb = {
  name: Word('захотеть', 5),
  singular1stPerson: Word('захочу', 5),
  singular2ndPerson: Word('захочешь', 3),
  singular3rdPerson: Word('захочет', 3),
  plural1stPerson: Word('захотим', 5),
  plural2ndPerson: Word('захотите', 5),
  plural3rdPerson: Word('захотят', 5),
  masculinePast: Word('захотел', 5),
  femininePast: Word('захотела', 5),
  neuterPast: Word('захотело', 5),
  pluralPast: Word('захотели', 5),
  imperativeInformal: Word('захоти', 5),
  imperativeFormal: Word('захотите', 5),
  imperfect: ['хотеть'],
};

perfectVerbs.set(захотеть.name.text, захотеть);

export { захотеть };