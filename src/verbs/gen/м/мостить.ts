import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мостить: PerfectVerb = {
  name: Word('мостить', 4),
  singular1stPerson: Word('мощу', 3),
  singular2ndPerson: Word('мостишь', 4),
  singular3rdPerson: Word('мостит', 4),
  plural1stPerson: Word('мостим', 4),
  plural2ndPerson: Word('мостите', 4),
  plural3rdPerson: Word('мостят', 4),
  masculinePast: Word('мостил', 4),
  femininePast: Word('мостила', 4),
  neuterPast: Word('мостило', 4),
  pluralPast: Word('мостили', 4),
  imperativeInformal: Word('мости', 4),
  imperativeFormal: Word('мостите', 4),
  imperfect: [],
};

perfectVerbs.set(мостить.name.text, мостить);

export { мостить };