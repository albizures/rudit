import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гостить: PerfectVerb = {
  name: Word('гостить', 4),
  singular1stPerson: Word('гощу', 3),
  singular2ndPerson: Word('гостишь', 4),
  singular3rdPerson: Word('гостит', 4),
  plural1stPerson: Word('гостим', 4),
  plural2ndPerson: Word('гостите', 4),
  plural3rdPerson: Word('гостят', 4),
  masculinePast: Word('гостил', 4),
  femininePast: Word('гостила', 4),
  neuterPast: Word('гостило', 4),
  pluralPast: Word('гостили', 4),
  imperativeInformal: Word('гости', 4),
  imperativeFormal: Word('гостите', 4),
  imperfect: [],
};

perfectVerbs.set(гостить.name.text, гостить);

export { гостить };