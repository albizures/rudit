import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекипать: PerfectVerb = {
  name: Word('перекипать', 7),
  singular1stPerson: Word('перекипаю', 7),
  singular2ndPerson: Word('перекипаешь', 7),
  singular3rdPerson: Word('перекипает', 7),
  plural1stPerson: Word('перекипаем', 7),
  plural2ndPerson: Word('перекипаете', 7),
  plural3rdPerson: Word('перекипают', 7),
  masculinePast: Word('перекипал', 7),
  femininePast: Word('перекипала', 7),
  neuterPast: Word('перекипало', 7),
  pluralPast: Word('перекипали', 7),
  imperativeInformal: Word('перекипай', 7),
  imperativeFormal: Word('перекипайте', 7),
  imperfect: [],
};

perfectVerbs.set(перекипать.name.text, перекипать);

export { перекипать };