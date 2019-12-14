import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоплощать: PerfectVerb = {
  name: Word('перевоплощать', 10),
  singular1stPerson: Word('перевоплощаю', 10),
  singular2ndPerson: Word('перевоплощаешь', 10),
  singular3rdPerson: Word('перевоплощает', 10),
  plural1stPerson: Word('перевоплощаем', 10),
  plural2ndPerson: Word('перевоплощаете', 10),
  plural3rdPerson: Word('перевоплощают', 10),
  masculinePast: Word('перевоплощал', 10),
  femininePast: Word('перевоплощала', 10),
  neuterPast: Word('перевоплощало', 10),
  pluralPast: Word('перевоплощали', 10),
  imperativeInformal: Word('перевоплощай', 10),
  imperativeFormal: Word('перевоплощайте', 10),
  imperfect: [],
};

perfectVerbs.set(перевоплощать.name.text, перевоплощать);

export { перевоплощать };