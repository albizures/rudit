import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высыпать: PerfectVerb = {
  name: Word('высыпать', 5),
  singular1stPerson: Word('высыпаю', 5),
  singular2ndPerson: Word('высыпаешь', 5),
  singular3rdPerson: Word('высыпает', 5),
  plural1stPerson: Word('высыпаем', 5),
  plural2ndPerson: Word('высыпаете', 5),
  plural3rdPerson: Word('высыпают', 5),
  masculinePast: Word('высыпал', 5),
  femininePast: Word('высыпала', 5),
  neuterPast: Word('высыпало', 5),
  pluralPast: Word('высыпали', 5),
  imperativeInformal: Word('высыпай', 5),
  imperativeFormal: Word('высыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(высыпать.name.text, высыпать);

export { высыпать };