import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закруглить: PerfectVerb = {
  name: Word('закруглить', 7),
  singular1stPerson: Word('закруглю', 7),
  singular2ndPerson: Word('закруглишь', 7),
  singular3rdPerson: Word('закруглит', 7),
  plural1stPerson: Word('закруглим', 7),
  plural2ndPerson: Word('закруглите', 7),
  plural3rdPerson: Word('закруглят', 7),
  masculinePast: Word('закруглил', 7),
  femininePast: Word('закруглила', 7),
  neuterPast: Word('закруглило', 7),
  pluralPast: Word('закруглили', 7),
  imperativeInformal: Word('закругли', 7),
  imperativeFormal: Word('закруглите', 7),
  imperfect: [],
};

perfectVerbs.set(закруглить.name.text, закруглить);

export { закруглить };