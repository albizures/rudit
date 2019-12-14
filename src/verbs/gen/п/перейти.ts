import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перейти: PerfectVerb = {
  name: Word('перейти', 6),
  singular1stPerson: Word('перейду', 6),
  singular2ndPerson: Word('перейдёшь', 6),
  singular3rdPerson: Word('перейдёт', 6),
  plural1stPerson: Word('перейдём', 6),
  plural2ndPerson: Word('перейдёте', 6),
  plural3rdPerson: Word('перейдут', 6),
  masculinePast: Word('перешёл', 5),
  femininePast: Word('перешла', 6),
  neuterPast: Word('перешло', 6),
  pluralPast: Word('перешли', 6),
  imperativeInformal: Word('перейди', 6),
  imperativeFormal: Word('перейдите', 6),
  imperfect: ['переходить'],
};

perfectVerbs.set(перейти.name.text, перейти);

export { перейти };