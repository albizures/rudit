import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завалить: PerfectVerb = {
  name: Word('завалить', 5),
  singular1stPerson: Word('завалю', 5),
  singular2ndPerson: Word('завалишь', 3),
  singular3rdPerson: Word('завалит', 3),
  plural1stPerson: Word('завалим', 3),
  plural2ndPerson: Word('завалите', 3),
  plural3rdPerson: Word('завалят', 3),
  masculinePast: Word('завалил', 5),
  femininePast: Word('завалила', 5),
  neuterPast: Word('завалило', 5),
  pluralPast: Word('завалили', 5),
  imperativeInformal: Word('завали', 5),
  imperativeFormal: Word('завалите', 5),
  imperfect: [],
};

perfectVerbs.set(завалить.name.text, завалить);

export { завалить };