import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепугать: PerfectVerb = {
  name: Word('перепугать', 7),
  singular1stPerson: Word('перепугаю', 7),
  singular2ndPerson: Word('перепугаешь', 7),
  singular3rdPerson: Word('перепугает', 7),
  plural1stPerson: Word('перепугаем', 7),
  plural2ndPerson: Word('перепугаете', 7),
  plural3rdPerson: Word('перепугают', 7),
  masculinePast: Word('перепугал', 7),
  femininePast: Word('перепугала', 7),
  neuterPast: Word('перепугало', 7),
  pluralPast: Word('перепугали', 7),
  imperativeInformal: Word('перепугай', 7),
  imperativeFormal: Word('перепугайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепугать.name.text, перепугать);

export { перепугать };