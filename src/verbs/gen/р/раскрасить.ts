import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрасить: PerfectVerb = {
  name: Word('раскрасить', 5),
  singular1stPerson: Word('раскрашу', 5),
  singular2ndPerson: Word('раскрасишь', 5),
  singular3rdPerson: Word('раскрасит', 5),
  plural1stPerson: Word('раскрасим', 5),
  plural2ndPerson: Word('раскрасите', 5),
  plural3rdPerson: Word('раскрасят', 5),
  masculinePast: Word('раскрасил', 5),
  femininePast: Word('раскрасила', 5),
  neuterPast: Word('раскрасило', 5),
  pluralPast: Word('раскрасили', 5),
  imperativeInformal: Word('раскрась', 5),
  imperativeFormal: Word('раскрасьте', 5),
  imperfect: [],
};

perfectVerbs.set(раскрасить.name.text, раскрасить);

export { раскрасить };