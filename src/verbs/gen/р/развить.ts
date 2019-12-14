import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развить: PerfectVerb = {
  name: Word('развить', 4),
  singular1stPerson: Word('разовью', 6),
  singular2ndPerson: Word('разовьёшь', 6),
  singular3rdPerson: Word('разовьёт', 6),
  plural1stPerson: Word('разовьём', 6),
  plural2ndPerson: Word('разовьёте', 6),
  plural3rdPerson: Word('разовьют', 6),
  masculinePast: Word('развил', 4),
  femininePast: Word('развила', 4),
  neuterPast: Word('развило', 4),
  pluralPast: Word('развили', 4),
  imperativeInformal: Word('развей', 4),
  imperativeFormal: Word('развейте', 4),
  imperfect: ['развивать'],
};

perfectVerbs.set(развить.name.text, развить);

export { развить };