import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замелить: PerfectVerb = {
  name: Word('замелить', 5),
  singular1stPerson: Word('замелю', 5),
  singular2ndPerson: Word('замелишь', 5),
  singular3rdPerson: Word('замелит', 5),
  plural1stPerson: Word('замелим', 5),
  plural2ndPerson: Word('замелите', 5),
  plural3rdPerson: Word('замелят', 5),
  masculinePast: Word('замелил', 5),
  femininePast: Word('замелила', 5),
  neuterPast: Word('замелило', 5),
  pluralPast: Word('замелили', 5),
  imperativeInformal: Word('замели', 5),
  imperativeFormal: Word('замелите', 5),
  imperfect: [],
};

perfectVerbs.set(замелить.name.text, замелить);

export { замелить };