import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлить: PerfectVerb = {
  name: Word('разлить', 4),
  singular1stPerson: Word('разолью', 6),
  singular2ndPerson: Word('разольёшь', 6),
  singular3rdPerson: Word('разольёт', 6),
  plural1stPerson: Word('разольём', 6),
  plural2ndPerson: Word('разольёте', 6),
  plural3rdPerson: Word('разольют', 6),
  masculinePast: Word('разлил', 4),
  femininePast: Word('разлила', 6),
  neuterPast: Word('разлило', 4),
  pluralPast: Word('разлили', 4),
  imperativeInformal: Word('разлей', 4),
  imperativeFormal: Word('разлейте', 4),
  imperfect: [],
};

perfectVerbs.set(разлить.name.text, разлить);

export { разлить };