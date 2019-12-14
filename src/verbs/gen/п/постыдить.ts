import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постыдить: PerfectVerb = {
  name: Word('постыдить', 6),
  singular1stPerson: Word('постыжу', 6),
  singular2ndPerson: Word('постыдишь', 6),
  singular3rdPerson: Word('постыдит', 6),
  plural1stPerson: Word('постыдим', 6),
  plural2ndPerson: Word('постыдите', 6),
  plural3rdPerson: Word('постыдят', 6),
  masculinePast: Word('постыдил', 6),
  femininePast: Word('постыдила', 6),
  neuterPast: Word('постыдило', 6),
  pluralPast: Word('постыдили', 6),
  imperativeInformal: Word('постыди', 6),
  imperativeFormal: Word('постыдите', 6),
  imperfect: [],
};

perfectVerbs.set(постыдить.name.text, постыдить);

export { постыдить };