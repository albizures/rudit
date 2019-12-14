import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевооружать: PerfectVerb = {
  name: Word('перевооружать', 10),
  singular1stPerson: Word('перевооружаю', 10),
  singular2ndPerson: Word('перевооружаешь', 10),
  singular3rdPerson: Word('перевооружает', 10),
  plural1stPerson: Word('перевооружаем', 10),
  plural2ndPerson: Word('перевооружаете', 10),
  plural3rdPerson: Word('перевооружают', 10),
  masculinePast: Word('перевооружал', 10),
  femininePast: Word('перевооружала', 10),
  neuterPast: Word('перевооружало', 10),
  pluralPast: Word('перевооружали', 10),
  imperativeInformal: Word('перевооружай', 10),
  imperativeFormal: Word('перевооружайте', 10),
  imperfect: [],
};

perfectVerbs.set(перевооружать.name.text, перевооружать);

export { перевооружать };