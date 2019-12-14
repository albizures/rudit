import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропить: PerfectVerb = {
  name: Word('пропить', 4),
  singular1stPerson: Word('пропью', 5),
  singular2ndPerson: Word('пропьёшь', 5),
  singular3rdPerson: Word('пропьёт', 5),
  plural1stPerson: Word('пропьём', 5),
  plural2ndPerson: Word('пропьёте', 5),
  plural3rdPerson: Word('пропьют', 5),
  masculinePast: Word('пропил', 4),
  femininePast: Word('пропила', 6),
  neuterPast: Word('пропило', 4),
  pluralPast: Word('пропили', 4),
  imperativeInformal: Word('пропей', 4),
  imperativeFormal: Word('пропейте', 4),
  imperfect: [],
};

perfectVerbs.set(пропить.name.text, пропить);

export { пропить };