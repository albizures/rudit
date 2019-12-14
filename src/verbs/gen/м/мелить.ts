import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мелить: PerfectVerb = {
  name: Word('мелить', 3),
  singular1stPerson: Word('мелю', 3),
  singular2ndPerson: Word('мелишь', 3),
  singular3rdPerson: Word('мелит', 3),
  plural1stPerson: Word('мелим', 3),
  plural2ndPerson: Word('мелите', 3),
  plural3rdPerson: Word('мелят', 3),
  masculinePast: Word('мелил', 3),
  femininePast: Word('мелила', 3),
  neuterPast: Word('мелило', 3),
  pluralPast: Word('мелили', 3),
  imperativeInformal: Word('мели', 3),
  imperativeFormal: Word('мелите', 3),
  imperfect: [],
};

perfectVerbs.set(мелить.name.text, мелить);

export { мелить };