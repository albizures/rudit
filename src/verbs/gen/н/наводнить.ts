import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наводнить: PerfectVerb = {
  name: Word('наводнить', 6),
  singular1stPerson: Word('наводню', 6),
  singular2ndPerson: Word('наводнишь', 6),
  singular3rdPerson: Word('наводнит', 6),
  plural1stPerson: Word('наводним', 6),
  plural2ndPerson: Word('наводните', 6),
  plural3rdPerson: Word('наводнят', 6),
  masculinePast: Word('наводнил', 6),
  femininePast: Word('наводнила', 6),
  neuterPast: Word('наводнило', 6),
  pluralPast: Word('наводнили', 6),
  imperativeInformal: Word('наводни', 6),
  imperativeFormal: Word('наводните', 6),
  imperfect: [],
};

perfectVerbs.set(наводнить.name.text, наводнить);

export { наводнить };