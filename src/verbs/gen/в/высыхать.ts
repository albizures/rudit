import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высыхать: PerfectVerb = {
  name: Word('высыхать', 5),
  singular1stPerson: Word('высыхаю', 5),
  singular2ndPerson: Word('высыхаешь', 5),
  singular3rdPerson: Word('высыхает', 5),
  plural1stPerson: Word('высыхаем', 5),
  plural2ndPerson: Word('высыхаете', 5),
  plural3rdPerson: Word('высыхают', 5),
  masculinePast: Word('высыхал', 5),
  femininePast: Word('высыхала', 5),
  neuterPast: Word('высыхало', 5),
  pluralPast: Word('высыхали', 5),
  imperativeInformal: Word('высыхай', 5),
  imperativeFormal: Word('высыхайте', 5),
  imperfect: ['высохнуть'],
};

perfectVerbs.set(высыхать.name.text, высыхать);

export { высыхать };