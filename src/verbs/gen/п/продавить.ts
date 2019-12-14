import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продавить: PerfectVerb = {
  name: Word('продавить', 6),
  singular1stPerson: Word('продавлю', 7),
  singular2ndPerson: Word('продавишь', 4),
  singular3rdPerson: Word('продавит', 4),
  plural1stPerson: Word('продавим', 4),
  plural2ndPerson: Word('продавите', 4),
  plural3rdPerson: Word('продавят', 4),
  masculinePast: Word('продавил', 6),
  femininePast: Word('продавила', 6),
  neuterPast: Word('продавило', 6),
  pluralPast: Word('продавили', 6),
  imperativeInformal: Word('продави', 6),
  imperativeFormal: Word('продавите', 6),
  imperfect: [],
};

perfectVerbs.set(продавить.name.text, продавить);

export { продавить };