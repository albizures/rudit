import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погнить: PerfectVerb = {
  name: Word('погнить', 4),
  singular1stPerson: Word('погнию', 5),
  singular2ndPerson: Word('погниёшь', 4),
  singular3rdPerson: Word('погниёт', 4),
  plural1stPerson: Word('погниём', 4),
  plural2ndPerson: Word('погниёте', 7),
  plural3rdPerson: Word('погниют', 5),
  masculinePast: Word('погнил', 4),
  femininePast: Word('погнила', 6),
  neuterPast: Word('погнило', 4),
  pluralPast: Word('погнили', 4),
  imperativeInformal: Word('погний', 1),
  imperativeFormal: Word('погнийте', 1),
  imperfect: [],
};

perfectVerbs.set(погнить.name.text, погнить);

export { погнить };