import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгласить: PerfectVerb = {
  name: Word('разгласить', 7),
  singular1stPerson: Word('разглашу', 7),
  singular2ndPerson: Word('разгласишь', 7),
  singular3rdPerson: Word('разгласит', 7),
  plural1stPerson: Word('разгласим', 7),
  plural2ndPerson: Word('разгласите', 7),
  plural3rdPerson: Word('разгласят', 7),
  masculinePast: Word('разгласил', 7),
  femininePast: Word('разгласила', 7),
  neuterPast: Word('разгласило', 7),
  pluralPast: Word('разгласили', 7),
  imperativeInformal: Word('разгласи', 7),
  imperativeFormal: Word('разгласите', 7),
  imperfect: [],
};

perfectVerbs.set(разгласить.name.text, разгласить);

export { разгласить };