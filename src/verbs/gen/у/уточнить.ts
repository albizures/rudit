import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уточнить: PerfectVerb = {
  name: Word('уточнить', 5),
  singular1stPerson: Word('уточню', 5),
  singular2ndPerson: Word('уточнишь', 5),
  singular3rdPerson: Word('уточнит', 5),
  plural1stPerson: Word('уточним', 5),
  plural2ndPerson: Word('уточните', 5),
  plural3rdPerson: Word('уточнят', 5),
  masculinePast: Word('уточнил', 5),
  femininePast: Word('уточнила', 5),
  neuterPast: Word('уточнило', 5),
  pluralPast: Word('уточнили', 5),
  imperativeInformal: Word('уточни', 5),
  imperativeFormal: Word('уточните', 5),
  imperfect: [],
};

perfectVerbs.set(уточнить.name.text, уточнить);

export { уточнить };