import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгостить: PerfectVerb = {
  name: Word('отгостить', 6),
  singular1stPerson: Word('отгощу', 5),
  singular2ndPerson: Word('отгостишь', 6),
  singular3rdPerson: Word('отгостит', 6),
  plural1stPerson: Word('отгостим', 6),
  plural2ndPerson: Word('отгостите', 6),
  plural3rdPerson: Word('отгостят', 6),
  masculinePast: Word('отгостил', 6),
  femininePast: Word('отгостила', 6),
  neuterPast: Word('отгостило', 6),
  pluralPast: Word('отгостили', 6),
  imperativeInformal: Word('отгости', 6),
  imperativeFormal: Word('отгостите', 6),
  imperfect: [],
};

perfectVerbs.set(отгостить.name.text, отгостить);

export { отгостить };