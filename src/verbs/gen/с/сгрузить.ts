import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгрузить: PerfectVerb = {
  name: Word('сгрузить', 5),
  singular1stPerson: Word('сгружу', 5),
  singular2ndPerson: Word('сгрузишь', 3),
  singular3rdPerson: Word('сгрузит', 3),
  plural1stPerson: Word('сгрузим', 3),
  plural2ndPerson: Word('сгрузите', 3),
  plural3rdPerson: Word('сгрузят', 3),
  masculinePast: Word('сгрузил', 5),
  femininePast: Word('сгрузила', 5),
  neuterPast: Word('сгрузило', 5),
  pluralPast: Word('сгрузили', 5),
  imperativeInformal: Word('сгрузи', 5),
  imperativeFormal: Word('сгрузите', 5),
  imperfect: [],
};

perfectVerbs.set(сгрузить.name.text, сгрузить);

export { сгрузить };