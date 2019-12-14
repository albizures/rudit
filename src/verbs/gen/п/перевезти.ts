import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевезти: PerfectVerb = {
  name: Word('перевезти', 8),
  singular1stPerson: Word('перевезу', 7),
  singular2ndPerson: Word('перевезёшь', 7),
  singular3rdPerson: Word('перевезёт', 7),
  plural1stPerson: Word('перевезём', 7),
  plural2ndPerson: Word('перевезёте', 7),
  plural3rdPerson: Word('перевезут', 7),
  masculinePast: Word('перевёз', 5),
  femininePast: Word('перевезла', 8),
  neuterPast: Word('перевезло', 8),
  pluralPast: Word('перевезли', 8),
  imperativeInformal: Word('перевези', 7),
  imperativeFormal: Word('перевезите', 7),
  imperfect: [],
};

perfectVerbs.set(перевезти.name.text, перевезти);

export { перевезти };