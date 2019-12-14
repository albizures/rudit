import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбить: PerfectVerb = {
  name: Word('сбить', 2),
  singular1stPerson: Word('собью', 4),
  singular2ndPerson: Word('собьёшь', 4),
  singular3rdPerson: Word('собьёт', 4),
  plural1stPerson: Word('собьём', 4),
  plural2ndPerson: Word('собьёте', 4),
  plural3rdPerson: Word('собьют', 4),
  masculinePast: Word('сбил', 2),
  femininePast: Word('сбила', 2),
  neuterPast: Word('сбило', 2),
  pluralPast: Word('сбили', 2),
  imperativeInformal: Word('сбей', 2),
  imperativeFormal: Word('сбейте', 2),
  imperfect: ['сбивать'],
};

perfectVerbs.set(сбить.name.text, сбить);

export { сбить };