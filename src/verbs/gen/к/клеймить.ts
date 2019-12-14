import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеймить: PerfectVerb = {
  name: Word('клеймить', 5),
  singular1stPerson: Word('клеймлю', 6),
  singular2ndPerson: Word('клеймишь', 5),
  singular3rdPerson: Word('клеймит', 5),
  plural1stPerson: Word('клеймим', 5),
  plural2ndPerson: Word('клеймите', 5),
  plural3rdPerson: Word('клеймят', 5),
  masculinePast: Word('клеймил', 5),
  femininePast: Word('клеймила', 5),
  neuterPast: Word('клеймило', 5),
  pluralPast: Word('клеймили', 5),
  imperativeInformal: Word('клейми', 5),
  imperativeFormal: Word('клеймите', 5),
  imperfect: [],
};

perfectVerbs.set(клеймить.name.text, клеймить);

export { клеймить };