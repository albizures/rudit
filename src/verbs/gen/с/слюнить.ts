import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слюнить: PerfectVerb = {
  name: Word('слюнить', 4),
  singular1stPerson: Word('слюню', 4),
  singular2ndPerson: Word('слюнишь', 4),
  singular3rdPerson: Word('слюнит', 4),
  plural1stPerson: Word('слюним', 4),
  plural2ndPerson: Word('слюните', 4),
  plural3rdPerson: Word('слюнят', 4),
  masculinePast: Word('слюнил', 4),
  femininePast: Word('слюнила', 4),
  neuterPast: Word('слюнило', 4),
  pluralPast: Word('слюнили', 4),
  imperativeInformal: Word('слюни', 4),
  imperativeFormal: Word('слюните', 4),
  imperfect: [],
};

perfectVerbs.set(слюнить.name.text, слюнить);

export { слюнить };