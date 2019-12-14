import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассыпать: PerfectVerb = {
  name: Word('рассыпать', 6),
  singular1stPerson: Word('рассыпаю', 6),
  singular2ndPerson: Word('рассыпаешь', 6),
  singular3rdPerson: Word('рассыпает', 6),
  plural1stPerson: Word('рассыпаем', 6),
  plural2ndPerson: Word('рассыпаете', 6),
  plural3rdPerson: Word('рассыпают', 6),
  masculinePast: Word('рассыпал', 6),
  femininePast: Word('рассыпала', 6),
  neuterPast: Word('рассыпало', 6),
  pluralPast: Word('рассыпали', 6),
  imperativeInformal: Word('рассыпай', 6),
  imperativeFormal: Word('рассыпайте', 6),
  imperfect: [],
};

perfectVerbs.set(рассыпать.name.text, рассыпать);

export { рассыпать };