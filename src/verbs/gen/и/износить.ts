import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const износить: PerfectVerb = {
  name: Word('износить', 5),
  singular1stPerson: Word('изношу', 5),
  singular2ndPerson: Word('износишь', 3),
  singular3rdPerson: Word('износит', 3),
  plural1stPerson: Word('износим', 3),
  plural2ndPerson: Word('износите', 3),
  plural3rdPerson: Word('износят', 3),
  masculinePast: Word('износил', 5),
  femininePast: Word('износила', 5),
  neuterPast: Word('износило', 5),
  pluralPast: Word('износили', 5),
  imperativeInformal: Word('износи', 5),
  imperativeFormal: Word('износите', 5),
  imperfect: [],
};

perfectVerbs.set(износить.name.text, износить);

export { износить };