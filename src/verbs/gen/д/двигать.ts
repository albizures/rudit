import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двигать: PerfectVerb = {
  name: Word('двигать', 2),
  singular1stPerson: Word('двигаю', 2),
  singular2ndPerson: Word('двигаешь', 2),
  singular3rdPerson: Word('двигает', 2),
  plural1stPerson: Word('двигаем', 2),
  plural2ndPerson: Word('двигаете', 2),
  plural3rdPerson: Word('двигают', 2),
  masculinePast: Word('двигал', 2),
  femininePast: Word('двигала', 2),
  neuterPast: Word('двигало', 2),
  pluralPast: Word('двигали', 2),
  imperativeInformal: Word('двигай', 2),
  imperativeFormal: Word('двигайте', 2),
  imperfect: ['двинуть'],
};

perfectVerbs.set(двигать.name.text, двигать);

export { двигать };