import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погостить: PerfectVerb = {
  name: Word('погостить', 6),
  singular1stPerson: Word('погощу', 5),
  singular2ndPerson: Word('погостишь', 6),
  singular3rdPerson: Word('погостит', 6),
  plural1stPerson: Word('погостим', 6),
  plural2ndPerson: Word('погостите', 6),
  plural3rdPerson: Word('погостят', 6),
  masculinePast: Word('погостил', 6),
  femininePast: Word('погостила', 6),
  neuterPast: Word('погостило', 6),
  pluralPast: Word('погостили', 6),
  imperativeInformal: Word('погости', 6),
  imperativeFormal: Word('погостите', 6),
  imperfect: [],
};

perfectVerbs.set(погостить.name.text, погостить);

export { погостить };