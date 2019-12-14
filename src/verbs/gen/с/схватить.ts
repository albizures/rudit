import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схватить: PerfectVerb = {
  name: Word('схватить', 5),
  singular1stPerson: Word('схвачу', 5),
  singular2ndPerson: Word('схватишь', 3),
  singular3rdPerson: Word('схватит', 3),
  plural1stPerson: Word('схватим', 3),
  plural2ndPerson: Word('схватите', 3),
  plural3rdPerson: Word('схватят', 3),
  masculinePast: Word('схватил', 5),
  femininePast: Word('схватила', 5),
  neuterPast: Word('схватило', 5),
  pluralPast: Word('схватили', 5),
  imperativeInformal: Word('схвати', 5),
  imperativeFormal: Word('схватите', 5),
  imperfect: ['хватать'],
};

perfectVerbs.set(схватить.name.text, схватить);

export { схватить };