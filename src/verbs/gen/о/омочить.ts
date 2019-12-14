import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омочить: PerfectVerb = {
  name: Word('омочить', 4),
  singular1stPerson: Word('омочу', 4),
  singular2ndPerson: Word('омочишь', 2),
  singular3rdPerson: Word('омочит', 2),
  plural1stPerson: Word('омочим', 2),
  plural2ndPerson: Word('омочите', 2),
  plural3rdPerson: Word('омочат', 2),
  masculinePast: Word('омочил', 4),
  femininePast: Word('омочила', 4),
  neuterPast: Word('омочило', 4),
  pluralPast: Word('омочили', 4),
  imperativeInformal: Word('омочи', 4),
  imperativeFormal: Word('омочите', 4),
  imperfect: [],
};

perfectVerbs.set(омочить.name.text, омочить);

export { омочить };