import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завёртывать: PerfectVerb = {
  name: Word('завёртывать', 3),
  singular1stPerson: Word('завёртываю', 3),
  singular2ndPerson: Word('завёртываешь', 3),
  singular3rdPerson: Word('завёртывает', 3),
  plural1stPerson: Word('завёртываем', 3),
  plural2ndPerson: Word('завёртываете', 3),
  plural3rdPerson: Word('завёртывают', 3),
  masculinePast: Word('завёртывал', 3),
  femininePast: Word('завёртывала', 3),
  neuterPast: Word('завёртывало', 3),
  pluralPast: Word('завёртывали', 3),
  imperativeInformal: Word('завёртывай', 3),
  imperativeFormal: Word('завёртывайте', 3),
  imperfect: ['завернуть'],
};

perfectVerbs.set(завёртывать.name.text, завёртывать);

export { завёртывать };