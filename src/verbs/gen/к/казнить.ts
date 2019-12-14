import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const казнить: PerfectVerb = {
  name: Word('казнить', 4),
  singular1stPerson: Word('казню', 4),
  singular2ndPerson: Word('казнишь', 4),
  singular3rdPerson: Word('казнит', 4),
  plural1stPerson: Word('казним', 4),
  plural2ndPerson: Word('казните', 4),
  plural3rdPerson: Word('казнят', 4),
  masculinePast: Word('казнил', 4),
  femininePast: Word('казнила', 4),
  neuterPast: Word('казнило', 4),
  pluralPast: Word('казнили', 4),
  imperativeInformal: Word('казни', 4),
  imperativeFormal: Word('казните', 4),
  imperfect: [],
};

perfectVerbs.set(казнить.name.text, казнить);

export { казнить };