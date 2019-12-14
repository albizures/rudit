import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетекать: PerfectVerb = {
  name: Word('перетекать', 7),
  singular1stPerson: Word('перетекаю', 7),
  singular2ndPerson: Word('перетекаешь', 7),
  singular3rdPerson: Word('перетекает', 7),
  plural1stPerson: Word('перетекаем', 7),
  plural2ndPerson: Word('перетекаете', 7),
  plural3rdPerson: Word('перетекают', 7),
  masculinePast: Word('перетекал', 7),
  femininePast: Word('перетекала', 7),
  neuterPast: Word('перетекало', 7),
  pluralPast: Word('перетекали', 7),
  imperativeInformal: Word('перетекай', 7),
  imperativeFormal: Word('перетекайте', 7),
  imperfect: [],
};

perfectVerbs.set(перетекать.name.text, перетекать);

export { перетекать };