import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогостить: PerfectVerb = {
  name: Word('прогостить', 7),
  singular1stPerson: Word('прогощу', 6),
  singular2ndPerson: Word('прогостишь', 7),
  singular3rdPerson: Word('прогостит', 7),
  plural1stPerson: Word('прогостим', 7),
  plural2ndPerson: Word('прогостите', 7),
  plural3rdPerson: Word('прогостят', 7),
  masculinePast: Word('прогостил', 7),
  femininePast: Word('прогостила', 7),
  neuterPast: Word('прогостило', 7),
  pluralPast: Word('прогостили', 7),
  imperativeInformal: Word('прогости', 7),
  imperativeFormal: Word('прогостите', 7),
  imperfect: [],
};

perfectVerbs.set(прогостить.name.text, прогостить);

export { прогостить };