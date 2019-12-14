import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегнить: PerfectVerb = {
  name: Word('перегнить', 6),
  singular1stPerson: Word('перегнию', 7),
  singular2ndPerson: Word('перегниёшь', 1),
  singular3rdPerson: Word('перегниёт', 1),
  plural1stPerson: Word('перегниём', 1),
  plural2ndPerson: Word('перегниёте', 1),
  plural3rdPerson: Word('перегниют', 7),
  masculinePast: Word('перегнил', 6),
  femininePast: Word('перегнила', 8),
  neuterPast: Word('перегнило', 6),
  pluralPast: Word('перегнили', 6),
  imperativeInformal: Word('перегний', 3),
  imperativeFormal: Word('перегнийте', 3),
  imperfect: [],
};

perfectVerbs.set(перегнить.name.text, перегнить);

export { перегнить };