import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрасить: PerfectVerb = {
  name: Word('перекрасить', 6),
  singular1stPerson: Word('перекрашу', 6),
  singular2ndPerson: Word('перекрасишь', 6),
  singular3rdPerson: Word('перекрасит', 6),
  plural1stPerson: Word('перекрасим', 6),
  plural2ndPerson: Word('перекрасите', 6),
  plural3rdPerson: Word('перекрасят', 6),
  masculinePast: Word('перекрасил', 6),
  femininePast: Word('перекрасила', 6),
  neuterPast: Word('перекрасило', 6),
  pluralPast: Word('перекрасили', 6),
  imperativeInformal: Word('перекрась', 6),
  imperativeFormal: Word('перекрасьте', 6),
  imperfect: [],
};

perfectVerbs.set(перекрасить.name.text, перекрасить);

export { перекрасить };