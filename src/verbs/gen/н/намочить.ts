import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намочить: PerfectVerb = {
  name: Word('намочить', 5),
  singular1stPerson: Word('намочу', 5),
  singular2ndPerson: Word('намочишь', 3),
  singular3rdPerson: Word('намочит', 3),
  plural1stPerson: Word('намочим', 3),
  plural2ndPerson: Word('намочите', 3),
  plural3rdPerson: Word('намочат', 3),
  masculinePast: Word('намочил', 5),
  femininePast: Word('намочила', 5),
  neuterPast: Word('намочило', 5),
  pluralPast: Word('намочили', 5),
  imperativeInformal: Word('намочи', 5),
  imperativeFormal: Word('намочите', 5),
  imperfect: [],
};

perfectVerbs.set(намочить.name.text, намочить);

export { намочить };