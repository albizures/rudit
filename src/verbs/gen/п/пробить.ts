import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробить: PerfectVerb = {
  name: Word('пробить', 4),
  singular1stPerson: Word('пробью', 5),
  singular2ndPerson: Word('пробьёшь', 2),
  singular3rdPerson: Word('пробьёт', 2),
  plural1stPerson: Word('пробьём', 2),
  plural2ndPerson: Word('пробьёте', 7),
  plural3rdPerson: Word('пробьют', 5),
  masculinePast: Word('пробил', 4),
  femininePast: Word('пробила', 4),
  neuterPast: Word('пробило', 4),
  pluralPast: Word('пробили', 4),
  imperativeInformal: Word('пробей', 4),
  imperativeFormal: Word('пробейте', 4),
  imperfect: [],
};

perfectVerbs.set(пробить.name.text, пробить);

export { пробить };