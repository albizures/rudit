import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымостить: PerfectVerb = {
  name: Word('вымостить', 1),
  singular1stPerson: Word('вымощу', 1),
  singular2ndPerson: Word('вымостишь', 1),
  singular3rdPerson: Word('вымостит', 1),
  plural1stPerson: Word('вымостим', 1),
  plural2ndPerson: Word('вымостите', 1),
  plural3rdPerson: Word('вымостят', 1),
  masculinePast: Word('вымостил', 1),
  femininePast: Word('вымостила', 1),
  neuterPast: Word('вымостило', 1),
  pluralPast: Word('вымостили', 1),
  imperativeInformal: Word('вымости', 1),
  imperativeFormal: Word('вымостите', 1),
  imperfect: [],
};

perfectVerbs.set(вымостить.name.text, вымостить);

export { вымостить };