import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлить: PerfectVerb = {
  name: Word('подлить', 4),
  singular1stPerson: Word('подолью', 6),
  singular2ndPerson: Word('подольёшь', 6),
  singular3rdPerson: Word('подольёт', 6),
  plural1stPerson: Word('подольём', 6),
  plural2ndPerson: Word('подольёте', 6),
  plural3rdPerson: Word('подольют', 6),
  masculinePast: Word('подлил//по'длил', 4),
  femininePast: Word('подлила', 6),
  neuterPast: Word('подлило//по'длило', 4),
  pluralPast: Word('подлили//по'длили', 4),
  imperativeInformal: Word('подлей', 4),
  imperativeFormal: Word('подлейте', 4),
  imperfect: [],
};

perfectVerbs.set(подлить.name.text, подлить);

export { подлить };