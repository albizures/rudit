import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашить: PerfectVerb = {
  name: Word('зашить', 3),
  singular1stPerson: Word('зашью', 4),
  singular2ndPerson: Word('зашьёшь', 1),
  singular3rdPerson: Word('зашьёт', 1),
  plural1stPerson: Word('зашьём', 1),
  plural2ndPerson: Word('зашьёте', 1),
  plural3rdPerson: Word('зашьют', 4),
  masculinePast: Word('зашил', 3),
  femininePast: Word('зашила', 3),
  neuterPast: Word('зашило', 3),
  pluralPast: Word('зашили', 3),
  imperativeInformal: Word('зашей', 3),
  imperativeFormal: Word('зашейте', 3),
  imperfect: [],
};

perfectVerbs.set(зашить.name.text, зашить);

export { зашить };