import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предвкушать: PerfectVerb = {
  name: Word('предвкушать', 8),
  singular1stPerson: Word('предвкушаю', 8),
  singular2ndPerson: Word('предвкушаешь', 8),
  singular3rdPerson: Word('предвкушает', 8),
  plural1stPerson: Word('предвкушаем', 8),
  plural2ndPerson: Word('предвкушаете', 8),
  plural3rdPerson: Word('предвкушают', 8),
  masculinePast: Word('предвкушал', 8),
  femininePast: Word('предвкушала', 8),
  neuterPast: Word('предвкушало', 8),
  pluralPast: Word('предвкушали', 8),
  imperativeInformal: Word('предвкушай', 8),
  imperativeFormal: Word('предвкушайте', 8),
  imperfect: [],
};

perfectVerbs.set(предвкушать.name.text, предвкушать);

export { предвкушать };