import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завёртывать: PerfectVerb = {
  name: Word('завёртывать', 1),
  singular1stPerson: Word('завёртываю', 1),
  singular2ndPerson: Word('завёртываешь', 1),
  singular3rdPerson: Word('завёртывает', 1),
  plural1stPerson: Word('завёртываем', 1),
  plural2ndPerson: Word('завёртываете', 1),
  plural3rdPerson: Word('завёртывают', 1),
  masculinePast: Word('завёртывал', 1),
  femininePast: Word('завёртывала', 1),
  neuterPast: Word('завёртывало', 1),
  pluralPast: Word('завёртывали', 1),
  imperativeInformal: Word('завёртывай', 1),
  imperativeFormal: Word('завёртывайте', 1),
  imperfect: ['завернуть'],
};

perfectVerbs.set(завёртывать.name.text, завёртывать);

export { завёртывать };