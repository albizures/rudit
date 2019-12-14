import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const править: PerfectVerb = {
  name: Word('править', 2),
  singular1stPerson: Word('правлю', 2),
  singular2ndPerson: Word('правишь', 2),
  singular3rdPerson: Word('правит', 2),
  plural1stPerson: Word('правим', 2),
  plural2ndPerson: Word('правите', 2),
  plural3rdPerson: Word('правят', 2),
  masculinePast: Word('правил', 2),
  femininePast: Word('правила', 2),
  neuterPast: Word('правило', 2),
  pluralPast: Word('правили', 2),
  imperativeInformal: Word('правь', 2),
  imperativeFormal: Word('правьте', 2),
  imperfect: [],
};

perfectVerbs.set(править.name.text, править);

export { править };