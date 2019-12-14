import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пополнить: PerfectVerb = {
  name: Word('пополнить', 3),
  singular1stPerson: Word('пополню', 3),
  singular2ndPerson: Word('пополнишь', 3),
  singular3rdPerson: Word('пополнит', 3),
  plural1stPerson: Word('пополним', 3),
  plural2ndPerson: Word('пополните', 3),
  plural3rdPerson: Word('пополнят', 3),
  masculinePast: Word('пополнил', 3),
  femininePast: Word('пополнила', 3),
  neuterPast: Word('пополнило', 3),
  pluralPast: Word('пополнили', 3),
  imperativeInformal: Word('пополни', 3),
  imperativeFormal: Word('пополните', 3),
  imperfect: [],
};

perfectVerbs.set(пополнить.name.text, пополнить);

export { пополнить };