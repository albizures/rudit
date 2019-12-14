import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемечать: PerfectVerb = {
  name: Word('перемечать', 7),
  singular1stPerson: Word('перемечаю', 7),
  singular2ndPerson: Word('перемечаешь', 7),
  singular3rdPerson: Word('перемечает', 7),
  plural1stPerson: Word('перемечаем', 7),
  plural2ndPerson: Word('перемечаете', 7),
  plural3rdPerson: Word('перемечают', 7),
  masculinePast: Word('перемечал', 7),
  femininePast: Word('перемечала', 7),
  neuterPast: Word('перемечало', 7),
  pluralPast: Word('перемечали', 7),
  imperativeInformal: Word('перемечай', 7),
  imperativeFormal: Word('перемечайте', 7),
  imperfect: [],
};

perfectVerbs.set(перемечать.name.text, перемечать);

export { перемечать };