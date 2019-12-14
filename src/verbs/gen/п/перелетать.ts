import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелетать: PerfectVerb = {
  name: Word('перелетать', 7),
  singular1stPerson: Word('перелетаю', 7),
  singular2ndPerson: Word('перелетаешь', 7),
  singular3rdPerson: Word('перелетает', 7),
  plural1stPerson: Word('перелетаем', 7),
  plural2ndPerson: Word('перелетаете', 7),
  plural3rdPerson: Word('перелетают', 7),
  masculinePast: Word('перелетал', 7),
  femininePast: Word('перелетала', 7),
  neuterPast: Word('перелетало', 7),
  pluralPast: Word('перелетали', 7),
  imperativeInformal: Word('перелетай', 7),
  imperativeFormal: Word('перелетайте', 7),
  imperfect: [],
};

perfectVerbs.set(перелетать.name.text, перелетать);

export { перелетать };