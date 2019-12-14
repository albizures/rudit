import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробубнить: PerfectVerb = {
  name: Word('пробубнить', 7),
  singular1stPerson: Word('пробубню', 7),
  singular2ndPerson: Word('пробубнишь', 7),
  singular3rdPerson: Word('пробубнит', 7),
  plural1stPerson: Word('пробубним', 7),
  plural2ndPerson: Word('пробубните', 7),
  plural3rdPerson: Word('пробубнят', 7),
  masculinePast: Word('пробубнил', 7),
  femininePast: Word('пробубнила', 7),
  neuterPast: Word('пробубнило', 7),
  pluralPast: Word('пробубнили', 7),
  imperativeInformal: Word('пробубни', 7),
  imperativeFormal: Word('пробубните', 7),
  imperfect: [],
};

perfectVerbs.set(пробубнить.name.text, пробубнить);

export { пробубнить };