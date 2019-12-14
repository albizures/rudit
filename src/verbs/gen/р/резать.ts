import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резать: PerfectVerb = {
  name: Word('резать', 1),
  singular1stPerson: Word('режу', 1),
  singular2ndPerson: Word('режешь', 1),
  singular3rdPerson: Word('режет', 1),
  plural1stPerson: Word('режем', 1),
  plural2ndPerson: Word('режете', 1),
  plural3rdPerson: Word('режут', 1),
  masculinePast: Word('резал', 1),
  femininePast: Word('резала', 1),
  neuterPast: Word('резало', 1),
  pluralPast: Word('резали', 1),
  imperativeInformal: Word('режь', 1),
  imperativeFormal: Word('режьте', 1),
  imperfect: ['порезать','разрезать','зарезать'],
};

perfectVerbs.set(резать.name.text, резать);

export { резать };