import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарабатывать: PerfectVerb = {
  name: Word('нарабатывать', 5),
  singular1stPerson: Word('нарабатываю', 5),
  singular2ndPerson: Word('нарабатываешь', 5),
  singular3rdPerson: Word('нарабатывает', 5),
  plural1stPerson: Word('нарабатываем', 5),
  plural2ndPerson: Word('нарабатываете', 5),
  plural3rdPerson: Word('нарабатывают', 5),
  masculinePast: Word('нарабатывал', 5),
  femininePast: Word('нарабатывала', 5),
  neuterPast: Word('нарабатывало', 5),
  pluralPast: Word('нарабатывали', 5),
  imperativeInformal: Word('нарабатывай', 5),
  imperativeFormal: Word('нарабатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(нарабатывать.name.text, нарабатывать);

export { нарабатывать };