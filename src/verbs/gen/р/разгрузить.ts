import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгрузить: PerfectVerb = {
  name: Word('разгрузить', 7),
  singular1stPerson: Word('разгружу', 7),
  singular2ndPerson: Word('разгрузишь', 5),
  singular3rdPerson: Word('разгрузит', 5),
  plural1stPerson: Word('разгрузим', 5),
  plural2ndPerson: Word('разгрузите', 5),
  plural3rdPerson: Word('разгрузят', 5),
  masculinePast: Word('разгрузил', 7),
  femininePast: Word('разгрузила', 7),
  neuterPast: Word('разгрузило', 7),
  pluralPast: Word('разгрузили', 7),
  imperativeInformal: Word('разгрузи', 7),
  imperativeFormal: Word('разгрузите', 7),
  imperfect: [],
};

perfectVerbs.set(разгрузить.name.text, разгрузить);

export { разгрузить };