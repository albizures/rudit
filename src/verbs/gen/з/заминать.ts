import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заминать: PerfectVerb = {
  name: Word('заминать', 5),
  singular1stPerson: Word('заминаю', 5),
  singular2ndPerson: Word('заминаешь', 5),
  singular3rdPerson: Word('заминает', 5),
  plural1stPerson: Word('заминаем', 5),
  plural2ndPerson: Word('заминаете', 5),
  plural3rdPerson: Word('заминают', 5),
  masculinePast: Word('заминал', 5),
  femininePast: Word('заминала', 5),
  neuterPast: Word('заминало', 5),
  pluralPast: Word('заминали', 5),
  imperativeInformal: Word('заминай', 5),
  imperativeFormal: Word('заминайте', 5),
  imperfect: [],
};

perfectVerbs.set(заминать.name.text, заминать);

export { заминать };