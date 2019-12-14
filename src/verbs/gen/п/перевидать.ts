import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевидать: PerfectVerb = {
  name: Word('перевидать', 7),
  singular1stPerson: Word('перевидаю', 7),
  singular2ndPerson: Word('перевидаешь', 7),
  singular3rdPerson: Word('перевидает', 7),
  plural1stPerson: Word('перевидаем', 7),
  plural2ndPerson: Word('перевидаете', 7),
  plural3rdPerson: Word('перевидают', 7),
  masculinePast: Word('перевидал', 7),
  femininePast: Word('перевидала', 7),
  neuterPast: Word('перевидало', 7),
  pluralPast: Word('перевидали', 7),
  imperativeInformal: Word('перевидай', 7),
  imperativeFormal: Word('перевидайте', 7),
  imperfect: [],
};

perfectVerbs.set(перевидать.name.text, перевидать);

export { перевидать };