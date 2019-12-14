import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелезать: PerfectVerb = {
  name: Word('перелезать', 7),
  singular1stPerson: Word('перелезаю', 7),
  singular2ndPerson: Word('перелезаешь', 7),
  singular3rdPerson: Word('перелезает', 7),
  plural1stPerson: Word('перелезаем', 7),
  plural2ndPerson: Word('перелезаете', 7),
  plural3rdPerson: Word('перелезают', 7),
  masculinePast: Word('перелезал', 7),
  femininePast: Word('перелезала', 7),
  neuterPast: Word('перелезало', 7),
  pluralPast: Word('перелезали', 7),
  imperativeInformal: Word('перелезай', 7),
  imperativeFormal: Word('перелезайте', 7),
  imperfect: [],
};

perfectVerbs.set(перелезать.name.text, перелезать);

export { перелезать };