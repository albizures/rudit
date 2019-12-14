import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запалить: PerfectVerb = {
  name: Word('запалить', 5),
  singular1stPerson: Word('запалю', 5),
  singular2ndPerson: Word('запалишь', 5),
  singular3rdPerson: Word('запалит', 5),
  plural1stPerson: Word('запалим', 5),
  plural2ndPerson: Word('запалите', 5),
  plural3rdPerson: Word('запалят', 5),
  masculinePast: Word('запалил', 5),
  femininePast: Word('запалила', 5),
  neuterPast: Word('запалило', 5),
  pluralPast: Word('запалили', 5),
  imperativeInformal: Word('запали', 5),
  imperativeFormal: Word('запалите', 5),
  imperfect: [],
};

perfectVerbs.set(запалить.name.text, запалить);

export { запалить };