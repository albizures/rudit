import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замочить: PerfectVerb = {
  name: Word('замочить', 5),
  singular1stPerson: Word('замочу', 5),
  singular2ndPerson: Word('замочишь', 3),
  singular3rdPerson: Word('замочит', 3),
  plural1stPerson: Word('замочим', 3),
  plural2ndPerson: Word('замочите', 3),
  plural3rdPerson: Word('замочат', 3),
  masculinePast: Word('замочил', 5),
  femininePast: Word('замочила', 5),
  neuterPast: Word('замочило', 5),
  pluralPast: Word('замочили', 5),
  imperativeInformal: Word('замочи', 5),
  imperativeFormal: Word('замочите', 5),
  imperfect: [],
};

perfectVerbs.set(замочить.name.text, замочить);

export { замочить };