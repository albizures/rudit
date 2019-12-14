import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошить: PerfectVerb = {
  name: Word('пошить', 3),
  singular1stPerson: Word('пошью', 4),
  singular2ndPerson: Word('пошьёшь', 4),
  singular3rdPerson: Word('пошьёт', 4),
  plural1stPerson: Word('пошьём', 4),
  plural2ndPerson: Word('пошьёте', 4),
  plural3rdPerson: Word('пошьют', 4),
  masculinePast: Word('пошил', 3),
  femininePast: Word('пошила', 3),
  neuterPast: Word('пошило', 3),
  pluralPast: Word('пошили', 3),
  imperativeInformal: Word('пошей', 3),
  imperativeFormal: Word('пошейте', 3),
  imperfect: [],
};

perfectVerbs.set(пошить.name.text, пошить);

export { пошить };