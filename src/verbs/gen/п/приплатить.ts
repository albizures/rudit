import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплатить: PerfectVerb = {
  name: Word('приплатить', 7),
  singular1stPerson: Word('приплачу', 7),
  singular2ndPerson: Word('приплатишь', 5),
  singular3rdPerson: Word('приплатит', 5),
  plural1stPerson: Word('приплатим', 5),
  plural2ndPerson: Word('приплатите', 5),
  plural3rdPerson: Word('приплатят', 5),
  masculinePast: Word('приплатил', 7),
  femininePast: Word('приплатила', 7),
  neuterPast: Word('приплатило', 7),
  pluralPast: Word('приплатили', 7),
  imperativeInformal: Word('приплати', 7),
  imperativeFormal: Word('приплатите', 7),
  imperfect: [],
};

perfectVerbs.set(приплатить.name.text, приплатить);

export { приплатить };