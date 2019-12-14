import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const направить: PerfectVerb = {
  name: Word('направить', 4),
  singular1stPerson: Word('направлю', 4),
  singular2ndPerson: Word('направишь', 4),
  singular3rdPerson: Word('направит', 4),
  plural1stPerson: Word('направим', 4),
  plural2ndPerson: Word('направите', 4),
  plural3rdPerson: Word('направят', 4),
  masculinePast: Word('направил', 4),
  femininePast: Word('направила', 4),
  neuterPast: Word('направило', 4),
  pluralPast: Word('направили', 4),
  imperativeInformal: Word('направь', 4),
  imperativeFormal: Word('направьте', 4),
  imperfect: ['направлять'],
};

perfectVerbs.set(направить.name.text, направить);

export { направить };