import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочить: PerfectVerb = {
  name: Word('сочить', 3),
  singular1stPerson: Word('сочу', 3),
  singular2ndPerson: Word('сочишь', 3),
  singular3rdPerson: Word('сочит', 3),
  plural1stPerson: Word('сочим', 3),
  plural2ndPerson: Word('сочите', 3),
  plural3rdPerson: Word('сочат', 3),
  masculinePast: Word('сочил', 3),
  femininePast: Word('сочила', 3),
  neuterPast: Word('сочило', 3),
  pluralPast: Word('сочили', 3),
  imperativeInformal: Word('сочи', 3),
  imperativeFormal: Word('сочите', 3),
  imperfect: [],
};

perfectVerbs.set(сочить.name.text, сочить);

export { сочить };