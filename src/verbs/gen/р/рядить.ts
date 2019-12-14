import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рядить: PerfectVerb = {
  name: Word('рядить', 3),
  singular1stPerson: Word('ряжу', 3),
  singular2ndPerson: Word('рядишь', 1),
  singular3rdPerson: Word('рядит', 1),
  plural1stPerson: Word('рядим', 1),
  plural2ndPerson: Word('рядите', 1),
  plural3rdPerson: Word('рядят', 1),
  masculinePast: Word('рядил', 3),
  femininePast: Word('рядила', 3),
  neuterPast: Word('рядило', 3),
  pluralPast: Word('рядили', 3),
  imperativeInformal: Word('ряди', 3),
  imperativeFormal: Word('рядите', 3),
  imperfect: [],
};

perfectVerbs.set(рядить.name.text, рядить);

export { рядить };