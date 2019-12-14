import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибавить: PerfectVerb = {
  name: Word('прибавить', 4),
  singular1stPerson: Word('прибавлю', 4),
  singular2ndPerson: Word('прибавишь', 4),
  singular3rdPerson: Word('прибавит', 4),
  plural1stPerson: Word('прибавим', 4),
  plural2ndPerson: Word('прибавите', 4),
  plural3rdPerson: Word('прибавят', 4),
  masculinePast: Word('прибавил', 4),
  femininePast: Word('прибавила', 4),
  neuterPast: Word('прибавило', 4),
  pluralPast: Word('прибавили', 4),
  imperativeInformal: Word('прибавь', 4),
  imperativeFormal: Word('прибавьте', 4),
  imperfect: ['прибавлять'],
};

perfectVerbs.set(прибавить.name.text, прибавить);

export { прибавить };