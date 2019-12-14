import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поманить: PerfectVerb = {
  name: Word('поманить', 5),
  singular1stPerson: Word('поманю', 5),
  singular2ndPerson: Word('поманишь', 3),
  singular3rdPerson: Word('поманит', 3),
  plural1stPerson: Word('поманим', 3),
  plural2ndPerson: Word('поманите', 3),
  plural3rdPerson: Word('поманят', 3),
  masculinePast: Word('поманил', 5),
  femininePast: Word('поманила', 5),
  neuterPast: Word('поманило', 5),
  pluralPast: Word('поманили', 5),
  imperativeInformal: Word('помани', 5),
  imperativeFormal: Word('поманите', 5),
  imperfect: [],
};

perfectVerbs.set(поманить.name.text, поманить);

export { поманить };