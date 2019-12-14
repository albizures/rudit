import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымочить: PerfectVerb = {
  name: Word('вымочить', 1),
  singular1stPerson: Word('вымочу', 1),
  singular2ndPerson: Word('вымочишь', 1),
  singular3rdPerson: Word('вымочит', 1),
  plural1stPerson: Word('вымочим', 1),
  plural2ndPerson: Word('вымочите', 1),
  plural3rdPerson: Word('вымочат', 1),
  masculinePast: Word('вымочил', 1),
  femininePast: Word('вымочила', 1),
  neuterPast: Word('вымочило', 1),
  pluralPast: Word('вымочили', 1),
  imperativeInformal: Word('вымочи', 1),
  imperativeFormal: Word('вымочите', 1),
  imperfect: [],
};

perfectVerbs.set(вымочить.name.text, вымочить);

export { вымочить };