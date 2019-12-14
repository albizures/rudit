import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжулить: PerfectVerb = {
  name: Word('обжулить', 3),
  singular1stPerson: Word('обжулю', 3),
  singular2ndPerson: Word('обжулишь', 3),
  singular3rdPerson: Word('обжулит', 3),
  plural1stPerson: Word('обжулим', 3),
  plural2ndPerson: Word('обжулите', 3),
  plural3rdPerson: Word('обжулят', 3),
  masculinePast: Word('обжулил', 3),
  femininePast: Word('обжулила', 3),
  neuterPast: Word('обжулило', 3),
  pluralPast: Word('обжулили', 3),
  imperativeInformal: Word('обжуль', 3),
  imperativeFormal: Word('обжульте', 3),
  imperfect: [],
};

perfectVerbs.set(обжулить.name.text, обжулить);

export { обжулить };