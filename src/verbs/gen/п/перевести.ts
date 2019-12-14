import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевести: PerfectVerb = {
  name: Word('перевести', 8),
  singular1stPerson: Word('переведу', 7),
  singular2ndPerson: Word('переведёшь', 7),
  singular3rdPerson: Word('переведёт', 7),
  plural1stPerson: Word('переведём', 7),
  plural2ndPerson: Word('переведёте', 7),
  plural3rdPerson: Word('переведут', 7),
  masculinePast: Word('перевёл', 5),
  femininePast: Word('перевела', 7),
  neuterPast: Word('перевело', 7),
  pluralPast: Word('перевели', 7),
  imperativeInformal: Word('переведи', 7),
  imperativeFormal: Word('переведите', 7),
  imperfect: ['переводить'],
};

perfectVerbs.set(перевести.name.text, перевести);

export { перевести };