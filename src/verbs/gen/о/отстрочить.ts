import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстрочить: PerfectVerb = {
  name: Word('отстрочить', 7),
  singular1stPerson: Word('отстрочу', 7),
  singular2ndPerson: Word('отстрочишь', 7),
  singular3rdPerson: Word('отстрочит', 7),
  plural1stPerson: Word('отстрочим', 7),
  plural2ndPerson: Word('отстрочите', 7),
  plural3rdPerson: Word('отстрочат', 7),
  masculinePast: Word('отстрочил', 7),
  femininePast: Word('отстрочила', 7),
  neuterPast: Word('отстрочило', 7),
  pluralPast: Word('отстрочили', 7),
  imperativeInformal: Word('отстрочи', 7),
  imperativeFormal: Word('отстрочите', 7),
  imperfect: [],
};

perfectVerbs.set(отстрочить.name.text, отстрочить);

export { отстрочить };