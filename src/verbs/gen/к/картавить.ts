import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const картавить: PerfectVerb = {
  name: Word('картавить', 4),
  singular1stPerson: Word('картавлю', 4),
  singular2ndPerson: Word('картавишь', 4),
  singular3rdPerson: Word('картавит', 4),
  plural1stPerson: Word('картавим', 4),
  plural2ndPerson: Word('картавите', 4),
  plural3rdPerson: Word('картавят', 4),
  masculinePast: Word('картавил', 4),
  femininePast: Word('картавила', 4),
  neuterPast: Word('картавило', 4),
  pluralPast: Word('картавили', 4),
  imperativeInformal: Word('картавь', 4),
  imperativeFormal: Word('картавьте', 4),
  imperfect: [],
};

perfectVerbs.set(картавить.name.text, картавить);

export { картавить };