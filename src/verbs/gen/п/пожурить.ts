import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожурить: PerfectVerb = {
  name: Word('пожурить', 5),
  singular1stPerson: Word('пожурю', 5),
  singular2ndPerson: Word('пожуришь', 5),
  singular3rdPerson: Word('пожурит', 5),
  plural1stPerson: Word('пожурим', 5),
  plural2ndPerson: Word('пожурите', 5),
  plural3rdPerson: Word('пожурят', 5),
  masculinePast: Word('пожурил', 5),
  femininePast: Word('пожурила', 5),
  neuterPast: Word('пожурило', 5),
  pluralPast: Word('пожурили', 5),
  imperativeInformal: Word('пожури', 5),
  imperativeFormal: Word('пожурите', 5),
  imperfect: [],
};

perfectVerbs.set(пожурить.name.text, пожурить);

export { пожурить };