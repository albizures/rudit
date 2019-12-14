import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заржавить: PerfectVerb = {
  name: Word('заржавить', 4),
  singular1stPerson: Word('заржавлю', 4),
  singular2ndPerson: Word('заржавишь', 4),
  singular3rdPerson: Word('заржавит', 4),
  plural1stPerson: Word('заржавим', 4),
  plural2ndPerson: Word('заржавите', 4),
  plural3rdPerson: Word('заржавят', 4),
  masculinePast: Word('заржавил', 4),
  femininePast: Word('заржавила', 4),
  neuterPast: Word('заржавило', 4),
  pluralPast: Word('заржавили', 4),
  imperativeInformal: Word('заржавь', 4),
  imperativeFormal: Word('заржавьте', 4),
  imperfect: [],
};

perfectVerbs.set(заржавить.name.text, заржавить);

export { заржавить };