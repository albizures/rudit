import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарушать: PerfectVerb = {
  name: Word('нарушать', 5),
  singular1stPerson: Word('нарушаю', 5),
  singular2ndPerson: Word('нарушаешь', 5),
  singular3rdPerson: Word('нарушает', 5),
  plural1stPerson: Word('нарушаем', 5),
  plural2ndPerson: Word('нарушаете', 5),
  plural3rdPerson: Word('нарушают', 5),
  masculinePast: Word('нарушал', 5),
  femininePast: Word('нарушала', 5),
  neuterPast: Word('нарушало', 5),
  pluralPast: Word('нарушали', 5),
  imperativeInformal: Word('нарушай', 5),
  imperativeFormal: Word('нарушайте', 5),
  imperfect: ['нарушить'],
};

perfectVerbs.set(нарушать.name.text, нарушать);

export { нарушать };