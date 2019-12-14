import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раззвонить: PerfectVerb = {
  name: Word('раззвонить', 7),
  singular1stPerson: Word('раззвоню', 7),
  singular2ndPerson: Word('раззвонишь', 7),
  singular3rdPerson: Word('раззвонит', 7),
  plural1stPerson: Word('раззвоним', 7),
  plural2ndPerson: Word('раззвоните', 7),
  plural3rdPerson: Word('раззвонят', 7),
  masculinePast: Word('раззвонил', 7),
  femininePast: Word('раззвонила', 7),
  neuterPast: Word('раззвонило', 7),
  pluralPast: Word('раззвонили', 7),
  imperativeInformal: Word('раззвони', 7),
  imperativeFormal: Word('раззвоните', 7),
  imperfect: [],
};

perfectVerbs.set(раззвонить.name.text, раззвонить);

export { раззвонить };