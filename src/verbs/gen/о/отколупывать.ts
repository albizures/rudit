import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отколупывать: PerfectVerb = {
  name: Word('отколупывать', 5),
  singular1stPerson: Word('отколупываю', 5),
  singular2ndPerson: Word('отколупываешь', 5),
  singular3rdPerson: Word('отколупывает', 5),
  plural1stPerson: Word('отколупываем', 5),
  plural2ndPerson: Word('отколупываете', 5),
  plural3rdPerson: Word('отколупывают', 5),
  masculinePast: Word('отколупывал', 5),
  femininePast: Word('отколупывала', 5),
  neuterPast: Word('отколупывало', 5),
  pluralPast: Word('отколупывали', 5),
  imperativeInformal: Word('отколупывай', 5),
  imperativeFormal: Word('отколупывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отколупывать.name.text, отколупывать);

export { отколупывать };