import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашить: PerfectVerb = {
  name: Word('нашить', 3),
  singular1stPerson: Word('нашью', 4),
  singular2ndPerson: Word('нашьёшь', 4),
  singular3rdPerson: Word('нашьёт', 4),
  plural1stPerson: Word('нашьём', 4),
  plural2ndPerson: Word('нашьёте', 4),
  plural3rdPerson: Word('нашьют', 4),
  masculinePast: Word('нашил', 3),
  femininePast: Word('нашила', 3),
  neuterPast: Word('нашило', 3),
  pluralPast: Word('нашили', 3),
  imperativeInformal: Word('нашей', 3),
  imperativeFormal: Word('нашейте', 3),
  imperfect: [],
};

perfectVerbs.set(нашить.name.text, нашить);

export { нашить };