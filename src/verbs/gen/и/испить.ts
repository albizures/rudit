import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испить: PerfectVerb = {
  name: Word('испить', 3),
  singular1stPerson: Word('изопью', 5),
  singular2ndPerson: Word('изопьёшь', 5),
  singular3rdPerson: Word('изопьёт', 5),
  plural1stPerson: Word('изопьём', 5),
  plural2ndPerson: Word('изопьёте', 5),
  plural3rdPerson: Word('изопьют', 5),
  masculinePast: Word('испил', 3),
  femininePast: Word('испила', 5),
  neuterPast: Word('испило', 3),
  pluralPast: Word('испили', 3),
  imperativeInformal: Word('испей', 3),
  imperativeFormal: Word('испейте', 3),
  imperfect: [],
};

perfectVerbs.set(испить.name.text, испить);

export { испить };