import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трогать: PerfectVerb = {
  name: Word('трогать', 2),
  singular1stPerson: Word('трогаю', 2),
  singular2ndPerson: Word('трогаешь', 2),
  singular3rdPerson: Word('трогает', 2),
  plural1stPerson: Word('трогаем', 2),
  plural2ndPerson: Word('трогаете', 2),
  plural3rdPerson: Word('трогают', 2),
  masculinePast: Word('трогал', 2),
  femininePast: Word('трогала', 2),
  neuterPast: Word('трогало', 2),
  pluralPast: Word('трогали', 2),
  imperativeInformal: Word('трогай', 2),
  imperativeFormal: Word('трогайте', 2),
  imperfect: ['тронуть'],
};

perfectVerbs.set(трогать.name.text, трогать);

export { трогать };