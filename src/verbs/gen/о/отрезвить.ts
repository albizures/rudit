import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрезвить: PerfectVerb = {
  name: Word('отрезвить', 6),
  singular1stPerson: Word('отрезвлю', 7),
  singular2ndPerson: Word('отрезвишь', 6),
  singular3rdPerson: Word('отрезвит', 6),
  plural1stPerson: Word('отрезвим', 6),
  plural2ndPerson: Word('отрезвите', 6),
  plural3rdPerson: Word('отрезвят', 6),
  masculinePast: Word('отрезвил', 6),
  femininePast: Word('отрезвила', 6),
  neuterPast: Word('отрезвило', 6),
  pluralPast: Word('отрезвили', 6),
  imperativeInformal: Word('отрезви', 6),
  imperativeFormal: Word('отрезвите', 6),
  imperfect: [],
};

perfectVerbs.set(отрезвить.name.text, отрезвить);

export { отрезвить };