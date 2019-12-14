import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвозить: PerfectVerb = {
  name: Word('отвозить', 5),
  singular1stPerson: Word('отвожу', 5),
  singular2ndPerson: Word('отвозишь', 3),
  singular3rdPerson: Word('отвозит', 3),
  plural1stPerson: Word('отвозим', 3),
  plural2ndPerson: Word('отвозите', 3),
  plural3rdPerson: Word('отвозят', 3),
  masculinePast: Word('отвозил', 5),
  femininePast: Word('отвозила', 5),
  neuterPast: Word('отвозило', 5),
  pluralPast: Word('отвозили', 5),
  imperativeInformal: Word('отвози', 5),
  imperativeFormal: Word('отвозите', 5),
  imperfect: [],
};

perfectVerbs.set(отвозить.name.text, отвозить);

export { отвозить };