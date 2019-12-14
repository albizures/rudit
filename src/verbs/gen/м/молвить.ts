import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молвить: PerfectVerb = {
  name: Word('молвить', 1),
  singular1stPerson: Word('молвлю', 1),
  singular2ndPerson: Word('молвишь', 1),
  singular3rdPerson: Word('молвит', 1),
  plural1stPerson: Word('молвим', 1),
  plural2ndPerson: Word('молвите', 1),
  plural3rdPerson: Word('молвят', 1),
  masculinePast: Word('молвил', 1),
  femininePast: Word('молвила', 1),
  neuterPast: Word('молвило', 1),
  pluralPast: Word('молвили', 1),
  imperativeInformal: Word('молви', 1),
  imperativeFormal: Word('молвите', 1),
  imperfect: ['промолвить'],
};

perfectVerbs.set(молвить.name.text, молвить);

export { молвить };