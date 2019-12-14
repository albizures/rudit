import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплотнить: PerfectVerb = {
  name: Word('уплотнить', 6),
  singular1stPerson: Word('уплотню', 6),
  singular2ndPerson: Word('уплотнишь', 6),
  singular3rdPerson: Word('уплотнит', 6),
  plural1stPerson: Word('уплотним', 6),
  plural2ndPerson: Word('уплотните', 6),
  plural3rdPerson: Word('уплотнят', 6),
  masculinePast: Word('уплотнил', 6),
  femininePast: Word('уплотнила', 6),
  neuterPast: Word('уплотнило', 6),
  pluralPast: Word('уплотнили', 6),
  imperativeInformal: Word('уплотни', 6),
  imperativeFormal: Word('уплотните', 6),
  imperfect: [],
};

perfectVerbs.set(уплотнить.name.text, уплотнить);

export { уплотнить };