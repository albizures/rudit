import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промолвить: PerfectVerb = {
  name: Word('промолвить', 4),
  singular1stPerson: Word('промолвлю', 4),
  singular2ndPerson: Word('промолвишь', 4),
  singular3rdPerson: Word('промолвит', 4),
  plural1stPerson: Word('промолвим', 4),
  plural2ndPerson: Word('промолвите', 4),
  plural3rdPerson: Word('промолвят', 4),
  masculinePast: Word('промолвил', 4),
  femininePast: Word('промолвила', 4),
  neuterPast: Word('промолвило', 4),
  pluralPast: Word('промолвили', 4),
  imperativeInformal: Word('промолви', 4),
  imperativeFormal: Word('промолвите', 4),
  imperfect: ['молвить'],
};

perfectVerbs.set(промолвить.name.text, промолвить);

export { промолвить };