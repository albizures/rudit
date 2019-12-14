import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скостить: PerfectVerb = {
  name: Word('скостить', 5),
  singular1stPerson: Word('скощу', 4),
  singular2ndPerson: Word('скостишь', 5),
  singular3rdPerson: Word('скостит', 5),
  plural1stPerson: Word('скостим', 5),
  plural2ndPerson: Word('скостите', 5),
  plural3rdPerson: Word('скостят', 5),
  masculinePast: Word('скостил', 5),
  femininePast: Word('скостила', 5),
  neuterPast: Word('скостило', 5),
  pluralPast: Word('скостили', 5),
  imperativeInformal: Word('скости', 5),
  imperativeFormal: Word('скостите', 5),
  imperfect: [],
};

perfectVerbs.set(скостить.name.text, скостить);

export { скостить };