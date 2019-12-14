import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымолвить: PerfectVerb = {
  name: Word('вымолвить', 1),
  singular1stPerson: Word('вымолвлю', 1),
  singular2ndPerson: Word('вымолвишь', 1),
  singular3rdPerson: Word('вымолвит', 1),
  plural1stPerson: Word('вымолвим', 1),
  plural2ndPerson: Word('вымолвите', 1),
  plural3rdPerson: Word('вымолвят', 1),
  masculinePast: Word('вымолвил', 1),
  femininePast: Word('вымолвила', 1),
  neuterPast: Word('вымолвило', 1),
  pluralPast: Word('вымолвили', 1),
  imperativeInformal: Word('вымолви', 1),
  imperativeFormal: Word('вымолвите', 1),
  imperfect: [],
};

perfectVerbs.set(вымолвить.name.text, вымолвить);

export { вымолвить };