import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прояснить: PerfectVerb = {
  name: Word('прояснить', 6),
  singular1stPerson: Word('проясню', 6),
  singular2ndPerson: Word('прояснишь', 6),
  singular3rdPerson: Word('прояснит', 6),
  plural1stPerson: Word('проясним', 6),
  plural2ndPerson: Word('проясните', 6),
  plural3rdPerson: Word('прояснят', 6),
  masculinePast: Word('прояснил', 6),
  femininePast: Word('прояснила', 6),
  neuterPast: Word('прояснило', 6),
  pluralPast: Word('прояснили', 6),
  imperativeInformal: Word('проясни', 6),
  imperativeFormal: Word('проясните', 6),
  imperfect: [],
};

perfectVerbs.set(прояснить.name.text, прояснить);

export { прояснить };