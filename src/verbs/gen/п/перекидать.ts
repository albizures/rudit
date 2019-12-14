import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекидать: PerfectVerb = {
  name: Word('перекидать', 7),
  singular1stPerson: Word('перекидаю', 7),
  singular2ndPerson: Word('перекидаешь', 7),
  singular3rdPerson: Word('перекидает', 7),
  plural1stPerson: Word('перекидаем', 7),
  plural2ndPerson: Word('перекидаете', 7),
  plural3rdPerson: Word('перекидают', 7),
  masculinePast: Word('перекидал', 7),
  femininePast: Word('перекидала', 7),
  neuterPast: Word('перекидало', 7),
  pluralPast: Word('перекидали', 7),
  imperativeInformal: Word('перекидай', 7),
  imperativeFormal: Word('перекидайте', 7),
  imperfect: [],
};

perfectVerbs.set(перекидать.name.text, перекидать);

export { перекидать };