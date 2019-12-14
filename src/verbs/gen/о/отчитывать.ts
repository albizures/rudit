import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчитывать: PerfectVerb = {
  name: Word('отчитывать', 3),
  singular1stPerson: Word('отчитываю', 3),
  singular2ndPerson: Word('отчитываешь', 3),
  singular3rdPerson: Word('отчитывает', 3),
  plural1stPerson: Word('отчитываем', 3),
  plural2ndPerson: Word('отчитываете', 3),
  plural3rdPerson: Word('отчитывают', 3),
  masculinePast: Word('отчитывал', 3),
  femininePast: Word('отчитывала', 3),
  neuterPast: Word('отчитывало', 3),
  pluralPast: Word('отчитывали', 3),
  imperativeInformal: Word('отчитывай', 3),
  imperativeFormal: Word('отчитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отчитывать.name.text, отчитывать);

export { отчитывать };