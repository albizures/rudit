import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепекать: PerfectVerb = {
  name: Word('перепекать', 7),
  singular1stPerson: Word('перепекаю', 7),
  singular2ndPerson: Word('перепекаешь', 7),
  singular3rdPerson: Word('перепекает', 7),
  plural1stPerson: Word('перепекаем', 7),
  plural2ndPerson: Word('перепекаете', 7),
  plural3rdPerson: Word('перепекают', 7),
  masculinePast: Word('перепекал', 7),
  femininePast: Word('перепекала', 7),
  neuterPast: Word('перепекало', 7),
  pluralPast: Word('перепекали', 7),
  imperativeInformal: Word('перепекай', 7),
  imperativeFormal: Word('перепекайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепекать.name.text, перепекать);

export { перепекать };