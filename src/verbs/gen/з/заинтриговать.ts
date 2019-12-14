import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заинтриговать: PerfectVerb = {
  name: Word('заинтриговать', 10),
  singular1stPerson: Word('заинтригую', 8),
  singular2ndPerson: Word('заинтригуешь', 8),
  singular3rdPerson: Word('заинтригует', 8),
  plural1stPerson: Word('заинтригуем', 8),
  plural2ndPerson: Word('заинтригуете', 8),
  plural3rdPerson: Word('заинтригуют', 8),
  masculinePast: Word('заинтриговал', 10),
  femininePast: Word('заинтриговала', 10),
  neuterPast: Word('заинтриговало', 10),
  pluralPast: Word('заинтриговали', 10),
  imperativeInformal: Word('заинтригуй', 8),
  imperativeFormal: Word('заинтригуйте', 8),
  imperfect: [],
};

perfectVerbs.set(заинтриговать.name.text, заинтриговать);

export { заинтриговать };