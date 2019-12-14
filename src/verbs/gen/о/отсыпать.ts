import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсыпать: PerfectVerb = {
  name: Word('отсыпать', 5),
  singular1stPerson: Word('отсыпаю', 5),
  singular2ndPerson: Word('отсыпаешь', 5),
  singular3rdPerson: Word('отсыпает', 5),
  plural1stPerson: Word('отсыпаем', 5),
  plural2ndPerson: Word('отсыпаете', 5),
  plural3rdPerson: Word('отсыпают', 5),
  masculinePast: Word('отсыпал', 5),
  femininePast: Word('отсыпала', 5),
  neuterPast: Word('отсыпало', 5),
  pluralPast: Word('отсыпали', 5),
  imperativeInformal: Word('отсыпай', 5),
  imperativeFormal: Word('отсыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(отсыпать.name.text, отсыпать);

export { отсыпать };