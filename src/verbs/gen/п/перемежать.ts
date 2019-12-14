import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемежать: PerfectVerb = {
  name: Word('перемежать', 7),
  singular1stPerson: Word('перемежаю', 7),
  singular2ndPerson: Word('перемежаешь', 7),
  singular3rdPerson: Word('перемежает', 7),
  plural1stPerson: Word('перемежаем', 7),
  plural2ndPerson: Word('перемежаете', 7),
  plural3rdPerson: Word('перемежают', 7),
  masculinePast: Word('перемежал', 7),
  femininePast: Word('перемежала', 7),
  neuterPast: Word('перемежало', 7),
  pluralPast: Word('перемежали', 7),
  imperativeInformal: Word('перемежай', 7),
  imperativeFormal: Word('перемежайте', 7),
  imperfect: [],
};

perfectVerbs.set(перемежать.name.text, перемежать);

export { перемежать };