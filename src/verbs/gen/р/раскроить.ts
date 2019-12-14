import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскроить: PerfectVerb = {
  name: Word('раскроить', 6),
  singular1stPerson: Word('раскрою', 6),
  singular2ndPerson: Word('раскроишь', 6),
  singular3rdPerson: Word('раскроит', 6),
  plural1stPerson: Word('раскроим', 6),
  plural2ndPerson: Word('раскроите', 6),
  plural3rdPerson: Word('раскроят', 6),
  masculinePast: Word('раскроил', 6),
  femininePast: Word('раскроила', 6),
  neuterPast: Word('раскроило', 6),
  pluralPast: Word('раскроили', 6),
  imperativeInformal: Word('раскрои', 6),
  imperativeFormal: Word('раскроите', 6),
  imperfect: [],
};

perfectVerbs.set(раскроить.name.text, раскроить);

export { раскроить };