import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенимать: PerfectVerb = {
  name: Word('перенимать', 7),
  singular1stPerson: Word('перенимаю', 7),
  singular2ndPerson: Word('перенимаешь', 7),
  singular3rdPerson: Word('перенимает', 7),
  plural1stPerson: Word('перенимаем', 7),
  plural2ndPerson: Word('перенимаете', 7),
  plural3rdPerson: Word('перенимают', 7),
  masculinePast: Word('перенимал', 7),
  femininePast: Word('перенимала', 7),
  neuterPast: Word('перенимало', 7),
  pluralPast: Word('перенимали', 7),
  imperativeInformal: Word('перенимай', 7),
  imperativeFormal: Word('перенимайте', 7),
  imperfect: [],
};

perfectVerbs.set(перенимать.name.text, перенимать);

export { перенимать };